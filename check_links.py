#!/usr/bin/env python3
"""
Script to check all resource links in the resources page
"""
import re
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

def extract_urls_from_file(filepath):
    """Extract all URLs from the page.js file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all URLs in the format url: 'https://...'
    pattern = r"url: '(https?://[^']+)'"
    urls = re.findall(pattern, content)
    return list(set(urls))  # Remove duplicates

def check_url(url, timeout=10):
    """Check if a URL is accessible"""
    try:
        response = requests.head(url, timeout=timeout, allow_redirects=True, 
                                headers={'User-Agent': 'Mozilla/5.0'})
        if response.status_code == 405:  # HEAD not allowed, try GET
            response = requests.get(url, timeout=timeout, allow_redirects=True,
                                   headers={'User-Agent': 'Mozilla/5.0'})
        
        if response.status_code < 400:
            return url, 'OK', response.status_code
        else:
            return url, 'ERROR', response.status_code
    except requests.exceptions.Timeout:
        return url, 'TIMEOUT', None
    except requests.exceptions.ConnectionError:
        return url, 'CONNECTION_ERROR', None
    except requests.exceptions.RequestException as e:
        return url, f'ERROR: {str(e)[:50]}', None

def main():
    filepath = '/Users/pm-18/Documents/Wellcome-Lab-main/app/resources/page.js'
    
    print("Extracting URLs from resources page...")
    urls = extract_urls_from_file(filepath)
    print(f"Found {len(urls)} unique URLs to check\n")
    
    print("Checking URLs (this may take a minute)...")
    print("-" * 80)
    
    ok_count = 0
    error_count = 0
    errors = []
    
    # Use ThreadPoolExecutor for concurrent requests
    with ThreadPoolExecutor(max_workers=10) as executor:
        future_to_url = {executor.submit(check_url, url): url for url in urls}
        
        for future in as_completed(future_to_url):
            url, status, code = future.result()
            
            if status == 'OK':
                ok_count += 1
                print(f"✓ {url} [{code}]")
            else:
                error_count += 1
                errors.append((url, status, code))
                print(f"✗ {url} [{status}] {code or ''}")
    
    print("\n" + "=" * 80)
    print(f"SUMMARY: {ok_count} working, {error_count} errors")
    print("=" * 80)
    
    if errors:
        print("\nBROKEN OR PROBLEMATIC LINKS:")
        for url, status, code in errors:
            print(f"  - {url}")
            print(f"    Status: {status} {code or ''}")

if __name__ == '__main__':
    main()
