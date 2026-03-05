import Breadcrumbs from '@/components/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Database, Lock } from 'lucide-react'

export default function DataPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <Breadcrumbs items={[{ label: 'Data' }]} />
      
      {/* Page Hero */}
      <section className="border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="container max-w-7xl px-6 py-6 md:py-10">
          <div className="max-w-4xl">
            <div className="section-eyebrow mb-2">Data</div>
            <h1 className="mb-3">Data</h1>
            <p className="text-lg leading-7" style={{ color: 'var(--muted)' }}>
              Access our research datasets and request data for your own analysis
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-7xl px-6 py-8 md:py-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="section-card">
            <p className="text-lg leading-7">
              We are committed to open science and making our research data accessible to support further investigation, policy development, and community action. All datasets are subject to privacy protections and data use agreements.
            </p>
          </section>

          {/* Datasets */}
          <section>
            <div className="section-eyebrow mb-4">Datasets</div>
            <h2 className="mb-6">Available Datasets</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="section-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Database className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Dataset {i}: Energy Burden Analysis</h3>
                        <p className="mb-4 leading-7">
                          Description of dataset content, methodology, sample size, and key variables. This dataset includes anonymized household energy consumption data, demographics, and health indicators.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span 
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{ 
                              background: 'var(--surface)',
                              color: 'var(--muted)'
                            }}
                          >
                            CSV Format
                          </span>
                          <span 
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{ 
                              background: 'var(--surface)',
                              color: 'var(--muted)'
                            }}
                          >
                            n=1,250 households
                          </span>
                          <span 
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                            style={{ 
                              background: 'var(--surface)',
                              color: 'var(--muted)'
                            }}
                          >
                            Updated: 2025
                          </span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="rounded-lg"
                          style={{ 
                            borderColor: 'var(--border)',
                            color: 'var(--brand)'
                          }}
                        >
                          <Lock className="h-4 w-4 mr-2" />
                          Request Access
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Request Access */}
          <section>
            <Card 
              className="border-l-4 shadow-sm"
              style={{ 
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                borderLeftColor: 'var(--accent)'
              }}
            >
              <CardContent className="p-8">
                <div className="section-eyebrow mb-3">Access</div>
                <h2 className="mb-4">Request Data Access</h2>
                <p className="mb-6 leading-7" style={{ color: 'var(--muted)' }}>
                  To request access to our datasets, please complete our data use agreement. We review all requests to ensure appropriate use and protection of participant privacy.
                </p>
                <Button 
                  size="lg"
                  className="rounded-xl"
                  style={{ 
                    background: 'var(--brand)',
                    color: 'white'
                  }}
                >
                  Request Data Access
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
