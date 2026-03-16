'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { ExternalLink, Database, Home, CloudRain, Building, Heart, ChevronRight } from 'lucide-react'

// ===================================================================
// STRUCTURED DATA — All content preserved exactly as source
// ===================================================================

const resourceData = [
  {
    id: 'public-health-data',
    title: 'Public Health Data & Longitudinal Surveys',
    icon: Database,
    description: 'This section highlights nationally representative longitudinal and population-based datasets widely used in public health and social science research. These resources support research on health behaviors, health outcomes, social determinants of health, and life-course dynamics, and are valuable for studies linking health, housing, energy, and environmental conditions.',
    subcategories: [
      {
        id: 'ph-datasets',
        label: 'All Datasets',
        resources: [
          {
            title: 'National Longitudinal Study of Adolescent to Adult Health (Add Health)',
            url: 'https://dupri.duke.edu/national-longitudinal-study-adolescent-adult-health',
            description: 'The National Longitudinal Study of Adolescent to Adult Health (Add Health) is a nationally representative longitudinal study that follows U.S. adolescents from grades 7\u201312 in the 1994\u201395 school year into adulthood. The study includes multiple waves of data capturing physical and mental health, health behaviors, family background, education, and social contexts. Add Health is widely used to examine life-course health trajectories, social determinants of health, and population health disparities.',
          },
          {
            title: 'National Longitudinal Survey of Youth 1979 (NLSY79)',
            url: 'https://dupri.duke.edu/national-longitudinal-survey-youth-1979',
            description: 'The National Longitudinal Survey of Youth 1979 (NLSY79) follows a nationally representative cohort of individuals born between 1957 and 1964. Since 1979, the survey has collected detailed information on employment, income, education, family formation, and health. NLSY79 is a key resource for studying long-term socioeconomic conditions and their relationships with health and well-being across the life course.',
          },
          {
            title: 'Panel Study of Income Dynamics (PSID)',
            url: 'https://dupri.duke.edu/panel-study-income-dynamics',
            description: 'The Panel Study of Income Dynamics (PSID) is the longest-running nationally representative longitudinal household survey in the United States. Beginning in 1968, PSID tracks families and their descendants over time, collecting data on income, wealth, housing, employment, and health. The dataset supports research on economic inequality, health disparities, and intergenerational mobility.',
          },
          {
            title: 'National Health and Nutrition Examination Survey (NHANES)',
            url: 'https://dupri.duke.edu/national-health-and-nutrition-examination-survey',
            description: 'The National Health and Nutrition Examination Survey (NHANES) is a nationally representative survey conducted by the Centers for Disease Control and Prevention that combines interviews, physical examinations, and laboratory tests. NHANES provides critical data on population health, nutrition, chronic disease prevalence, and environmental exposures, and is widely used in public health research and policy analysis.',
          },
        ],
      },
    ],
  },
  {
    id: 'energy-housing',
    title: 'Energy & Housing',
    icon: Home,
    description: null,
    subcategories: [
      {
        id: 'weatherization',
        label: 'A. Weatherization Information',
        description: 'Educational resources and official programs that support home weatherization, energy efficiency improvements, and healthier housing conditions, particularly for low- and moderate-income households. These resources provide guidance on insulation, air sealing, ventilation, and safe energy upgrades, while also highlighting the potential benefits for indoor air quality, household energy affordability, and public health outcomes.',
        resources: [
          {
            title: 'How Weatherization Works',
            url: 'https://www.energy.gov/scep/weatherization/how-weatherization-works',
            description: 'An overview of common weatherization measures used to improve home energy performance and living conditions. These measures include insulation upgrades, air sealing, heating and cooling system improvements, and basic health and safety checks. Weatherization helps reduce energy loss, lower utility costs, improve indoor comfort, and support healthier housing environments for households.',
          },
          {
            title: 'Weatherization and Health & Safety',
            url: 'https://www.energy.gov/scep/weatherization/health-and-safety',
            description: 'Information on how the U.S. Department of Energy\u2019s Weatherization Assistance Program addresses health and safety concerns in homes. The program focuses on improving indoor air quality, managing moisture and mold risks, enhancing ventilation, and ensuring safe operation of heating systems, while protecting residents\u2019 health during energy efficiency upgrades and home improvements.',
          },
          {
            group: 'National Renewable Energy Laboratory (NREL)',
            title: 'Weatherization Best Practices',
            url: 'https://www.nrel.gov/buildings/weatherization.html',
            description: 'Research-based guidance on effective weatherization strategies that improve building performance, reduce energy consumption, and enhance indoor comfort. These resources highlight proven techniques such as insulation upgrades, air sealing, and efficient heating and cooling systems, while providing technical recommendations to ensure energy savings, durability, and safe, high-quality home energy retrofit practices.',
          },
          {
            title: 'Residential Energy Efficiency Resources',
            url: 'https://www.nrel.gov/buildings/residential.html',
            description: 'Technical and educational materials on improving home energy efficiency and implementing effective retrofit strategies. These resources provide guidance on insulation, heating and cooling systems, efficient appliances, and building upgrades that reduce energy consumption, lower household utility costs, improve indoor comfort, and support more sustainable residential energy use.',
          },
          {
            group: 'U.S. Environmental Protection Agency (EPA)',
            title: 'Healthy Indoor Environment & Weatherization',
            url: 'https://www.epa.gov/indoor-air-quality-iaq',
            description: 'Resources on improving indoor air quality and reducing health risks through home energy improvements and better housing conditions. These materials provide guidance on ventilation, moisture control, pollutant reduction, and safe weatherization practices, helping households create healthier indoor environments while improving energy efficiency and protecting the health of residents.',
          },
          {
            title: 'Indoor Air Quality Tools for Homes',
            url: 'https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-home',
            description: 'Practical guidance for reducing indoor pollutants, improving ventilation, and maintaining healthy living environments in residential buildings. These tools provide easy-to-use recommendations for identifying common indoor air contaminants, managing moisture and mold, improving airflow, and adopting everyday practices that support healthier homes and better indoor environmental quality for families.',
          },
          {
            group: 'Additional Educational & Community Resources',
            title: 'Energy Saver (DOE Consumer Guide)',
            url: 'https://www.energy.gov/energysaver',
            description: 'A consumer-friendly guide developed by the U.S. Department of Energy that provides practical, easy-to-understand tips on improving home energy efficiency. The guide covers insulation, air sealing, heating and cooling systems, appliances, and renewable energy options, helping households reduce energy costs, improve comfort, and make informed decisions about home energy upgrades.',
          },
          {
            title: 'Low-Income Energy Affordability Network (LEAN)',
            url: 'https://www.li-en.org',
            description: 'A collaborative network that shares best practices, research, and practical resources to support energy affordability and efficiency programs for low-income households. LEAN connects policymakers, utilities, community organizations, and researchers to improve program design, expand access to energy assistance, and promote equitable energy efficiency and weatherization initiatives nationwide.',
          },
          {
            group: 'Reports & Evidence-Based Resources',
            title: 'Weatherization Plus Health Initiative (DOE)',
            url: 'https://www.energy.gov/scep/weatherization/weatherization-plus-health',
            description: 'A U.S. Department of Energy initiative that integrates home energy efficiency improvements with targeted health interventions. The program promotes collaboration between weatherization providers, public health agencies, and community organizations to address housing-related health risks, improve indoor environments, and maximize both energy savings and health benefits for vulnerable households.',
          },
          {
            title: 'National Academies Reports on Weatherization and Health',
            url: 'https://nap.nationalacademies.org',
            description: 'Evidence-based reports and research summaries that examine the connections between home energy improvements, health outcomes, safety, and economic benefits. These resources synthesize findings from interdisciplinary studies on housing, energy efficiency, and public health, providing policy-relevant insights for researchers, practitioners, and decision-makers working on healthy and energy-efficient homes.',
          },
        ],
      },
      {
        id: 'electrification',
        label: 'B. Electrification',
        description: 'Resources on building electrification, clean energy transitions, and household energy usage.',
        resources: [
          {
            title: 'Energy Saver Home Electrification',
            url: 'https://www.energy.gov/energysaver/electrification',
            description: 'Consumer-focused guidance from the U.S. Department of Energy on transitioning homes to electric technologies. The resource explains electric heating and cooling systems, induction cooking, water heating, and efficient appliances, while providing practical information on costs, benefits, and energy savings associated with residential electrification and cleaner home energy solutions.',
          },
          {
            title: 'Building Electrification & Decarbonization Research',
            source: 'Lawrence Berkeley National Laboratory (LBNL)',
            url: 'https://buildings.lbl.gov',
            description: 'Research and technical resources on building electrification, including studies on heat pumps, induction cooking technologies, electrical panel capacity, and grid integration. LBNL also examines policy, market adoption, and equity considerations, providing evidence-based insights that support the transition to efficient, low-carbon residential energy systems.',
          },
          {
            group: 'Policy Resources',
            title: 'Rewiring America',
            url: 'https://www.rewiringamerica.org',
            description: 'A nonprofit organization providing practical guidance and policy resources to accelerate household electrification across the United States. The organization offers tools on electrification incentives, cost savings, and home upgrade planning, while also supporting workforce development and policy initiatives that expand access to clean energy technologies and affordable electric homes.',
          },
          {
            title: 'ACEEE Building Electrification',
            url: 'https://www.aceee.org/topic/building-electrification',
            description: 'Research and policy analysis from the American Council for an Energy-Efficient Economy (ACEEE) examining the impacts of building electrification on energy affordability, greenhouse gas emissions, and public health. These resources provide data-driven insights, policy recommendations, and technical analysis to support equitable, efficient, and low-carbon transitions in residential and commercial buildings.',
          },
        ],
      },
      {
        id: 'indoor-air-quality',
        label: 'C. Indoor Air Quality and Health',
        description: 'Resources that connect indoor air quality, housing conditions, and environmental exposures with physical and mental health outcomes. These materials highlight research, public health guidance, and practical tools that help identify indoor pollutants, improve ventilation, and promote healthier housing environments, particularly for vulnerable populations and communities experiencing housing or environmental risks.',
        resources: [
          {
            group: 'U.S. Environmental Protection Agency (EPA)',
            title: 'Indoor Air Quality (IAQ)',
            url: 'https://www.epa.gov/indoor-air-quality-iaq',
            description: 'Comprehensive guidance from the U.S. Environmental Protection Agency on indoor air pollutants, ventilation, and strategies for maintaining healthy homes. These resources explain common sources of indoor contamination, such as combustion pollutants, chemicals, and biological agents, and provide practical recommendations to improve air quality and reduce health risks in residential environments.',
          },
          {
            title: 'IAQ Tools for Homes',
            url: 'https://www.epa.gov/indoor-air-quality-iaq/iaq-tools-homes',
            description: 'Practical, easy-to-use resources developed by the U.S. Environmental Protection Agency to help households and community educators understand and improve indoor air quality. These tools provide guidance on identifying common indoor pollutants, improving ventilation, controlling moisture and mold, and adopting everyday practices that support healthier home environments.',
          },
          {
            group: 'Centers for Disease Control and Prevention (CDC)',
            title: 'Healthy Homes',
            url: 'https://www.cdc.gov/healthyhomes',
            description: 'Resources from the Centers for Disease Control and Prevention (CDC) that provide information on housing-related health risks and strategies for creating safer home environments. These materials address issues such as mold, combustion pollutants, ventilation, pests, and chemical exposures, while offering guidance to reduce environmental hazards and protect residents\u2019 health.',
          },
          {
            group: 'Research & Public Health Resources',
            title: 'Harvard T.H. Chan \u2013 Indoor Air Quality & Health',
            url: 'https://www.hsph.harvard.edu/iaq/',
            description: 'Research and educational resources from the Harvard T.H. Chan School of Public Health examining the relationships between indoor environments, air pollution exposure, and human health outcomes. These materials highlight scientific studies on ventilation, indoor pollutants, and building conditions, providing evidence to support healthier homes, workplaces, and public buildings.',
          },
          {
            title: 'WHO Housing and Health Guidelines',
            url: 'https://www.who.int/publications/i/item/9789241550376',
            description: 'Evidence-based recommendations from the World Health Organization on how housing conditions influence health and well-being. The guidelines summarize global research on issues such as indoor air quality, temperature, crowding, noise, and building safety, providing policy guidance to support healthier housing environments and reduce health risks associated with poor living conditions.',
          },
        ],
      },
      {
        id: 'microgrids',
        label: 'D. Microgrids',
        description: 'Resources on community microgrids, distributed energy systems, and energy justice initiatives that support resilient energy infrastructure. These materials highlight research, policy guidance, and case studies on microgrid planning, design, and deployment, with a focus on enhancing energy reliability, supporting critical services, and improving resilience for vulnerable and underserved communities.',
        resources: [
          {
            group: 'U.S. Department of Energy (DOE)',
            title: 'Community Microgrids',
            url: 'https://www.energy.gov/oe/community-microgrids',
            description: 'An overview of how community microgrids enhance energy resilience, reliability, and equity, particularly during extreme weather events and power outages. These resources explain how locally controlled energy systems\u2014often integrating renewable energy and storage\u2014can maintain critical services, support vulnerable communities, and strengthen grid reliability while advancing cleaner and more decentralized energy systems.',
          },
          {
            title: 'Office of Electricity \u2013 Microgrid Research',
            url: 'https://www.energy.gov/oe/microgrids',
            description: 'Research programs from the U.S. Department of Energy\u2019s Office of Electricity that support the planning, design, testing, and deployment of microgrid systems. These initiatives advance technologies, tools, and demonstration projects that improve grid reliability, integrate renewable energy, and strengthen energy resilience for communities, critical infrastructure, and essential services.',
          },
          {
            group: 'National Renewable Energy Laboratory (NREL)',
            title: 'Microgrid Research and Analysis',
            url: 'https://www.nrel.gov/grid/microgrids.html',
            description: 'Resources from the National Renewable Energy Laboratory (NREL) that provide tools, case studies, and technical guidance for designing, modeling, and evaluating microgrid systems. These materials support researchers, planners, and policymakers in understanding microgrid performance, integrating renewable energy and storage, and improving energy resilience for communities and critical facilities.',
          },
          {
            title: 'Resilient Energy Systems & Microgrids',
            url: 'https://www.nrel.gov/resilience',
            description: 'Research from the National Renewable Energy Laboratory (NREL) on how resilient energy systems and microgrids can support critical facilities and vulnerable communities. These resources examine strategies for integrating distributed energy, storage, and advanced controls to maintain power during disruptions, enhance grid resilience, and improve energy security in the face of extreme weather and climate risks.',
          },
          {
            group: 'Community & Policy Resources',
            title: 'Clean Energy Group \u2013 Resilient Power Project',
            url: 'https://www.cleanegroup.org/ceg-project/resilient-power-project/',
            description: 'A research and policy initiative that provides case studies, reports, and guidance on solar-plus-storage microgrids designed to support affordable housing, community facilities, and critical services. The project highlights how resilient clean energy systems can protect vulnerable communities during power outages while advancing energy equity and climate resilience.',
          },
          {
            title: 'Rocky Mountain Institute (RMI): Community Energy Resilience',
            url: 'https://rmi.org/our-work/electricity/community-energy-resilience/',
            description: 'Resources and strategies from the Rocky Mountain Institute focused on equitable and community-centered energy resilience planning. These materials explore how distributed energy systems, microgrids, and clean energy technologies can strengthen local energy systems, improve reliability during disruptions, and support resilient, low-carbon communities through inclusive planning and policy solutions.',
          },
          {
            title: 'National Longitudinal Study of Adolescent to Adult Health',
            url: 'https://www.icpsr.umich.edu/web/ICPSR/studies/21600',
            description: 'A nationally representative longitudinal study that follows U.S. adolescents who were in grades 7\u201312 during the 1994\u20131995 school year into adulthood. The dataset includes multiple waves of data covering physical and mental health, social environments, family background, and economic conditions, supporting research on life-course health, social determinants, and population health disparities.',
          },
          {
            title: 'CDC Research Data Center (RDC)',
            url: 'https://www.cdc.gov/rdc/',
            description: 'The CDC Research Data Center, operated by the National Center for Health Statistics, provides researchers secure access to restricted-use health and survey data that are not available in public-use datasets. Through an approved application process, researchers can analyze detailed data while ensuring the confidentiality and privacy of individuals and institutions represented in the data.',
          },
          {
            title: 'PSID SIMBA ZIP Files',
            url: 'https://simba.isr.umich.edu/Zips/ZipMain.aspx',
            description: 'The SIMBA ZIP Files page, hosted by the Panel Study of Income Dynamics (PSID) at the University of Michigan, provides downloadable packages of PSID main and supplemental datasets, codebooks, and documentation. These files enable researchers to access detailed longitudinal data on families and individuals, supporting research on economic conditions, demographics, health, and social dynamics over time.',
          },
        ],
      },
      {
        id: 'resilience-actions',
        label: 'E. Resilience Actions or Plans',
        description: 'Resources focused on climate resilience, extreme weather preparedness, and community-based planning efforts. These materials provide guidance, tools, and case studies that help communities assess climate risks, strengthen infrastructure, and develop strategies to prepare for, respond to, and recover from climate-related hazards while protecting vulnerable populations.',
        resources: [
          {
            group: 'Federal & National Resources',
            title: 'FEMA \u2013 Building Community Resilience',
            url: 'https://www.fema.gov/emergency-managers/risk-management/resilience',
            description: 'Guidance from the Federal Emergency Management Agency (FEMA) on preparing for, responding to, and recovering from climate-related disasters and extreme weather events. These resources provide tools and strategies for risk assessment, hazard mitigation, infrastructure planning, and community preparedness to strengthen long-term resilience and reduce the impacts of natural hazards.',
          },
          {
            title: 'NOAA Climate Resilience Toolkit',
            url: 'https://toolkit.climate.gov',
            description: 'A collection of tools, data resources, and case studies developed by the National Oceanic and Atmospheric Administration to support climate-informed decision-making. The toolkit helps communities, planners, and policymakers assess climate risks, understand local impacts, and develop strategies for climate adaptation, hazard mitigation, and long-term resilience planning.',
          },
          {
            group: 'Planning & Community-Based Resources',
            title: 'Urban Sustainability Directors Network (USDN)',
            url: 'https://www.usdn.org',
            description: 'A peer network and resource hub that supports local government leaders advancing sustainability and climate resilience initiatives. USDN provides tools, research, and collaborative learning opportunities focused on resilience planning, equity-centered climate strategies, and community-based solutions that help cities address climate risks and build more sustainable and inclusive communities.',
          },
          {
            title: 'American Planning Association \u2013 Resilience & Hazard Mitigation',
            url: 'https://www.planning.org/knowledgebase/resilience/',
            description: 'Resources from the American Planning Association that provide planning frameworks and best practices for integrating climate resilience and hazard mitigation into community planning. These materials highlight strategies that connect climate risks, public health, land use, and infrastructure planning to help communities prepare for and adapt to environmental hazards.',
          },
          {
            group: 'Health & Energy Resilience',
            title: 'HHS Climate & Health Program',
            url: 'https://www.hhs.gov/climate-change-health-equity-environmental-justice',
            description: 'Resources from the U.S. Department of Health and Human Services that examine the connections between climate change, health risks, and community resilience. These materials provide research, policy guidance, and tools that help public health agencies and communities understand climate-related health impacts and develop strategies to protect vulnerable populations.',
          },
          {
            group: 'Resiliency Planning',
            title: 'South Carolina Sea Grant Consortium \u2013 Resilience Planning Archives',
            url: 'https://www.scseagrant.org/resilience-planning/',
            description: 'A collection of resources and planning documents focused on climate resilience and hazard mitigation in South Carolina. The archive includes reports, proposals, and planning tools that support coastal and community resilience efforts, helping local governments, researchers, and organizations address climate risks and strengthen long-term environmental and infrastructure resilience.',
          },
          {
            title: 'South Carolina Office of Resilience',
            url: 'https://scor.sc.gov/',
            description: 'Resources and official documents related to resilience planning, hazard mitigation, and climate adaptation policies in South Carolina. The Office of Resilience provides guidance, reports, and program information that support state and local efforts to reduce disaster risks, strengthen infrastructure, and enhance community resilience to flooding, extreme weather, and climate impacts.',
          },
        ],
      },
    ],
  },
  {
    id: 'climate-community-resilience',
    title: 'Climate & Community Resilience',
    icon: CloudRain,
    description: 'This section brings together resources on climate resilience, extreme weather preparedness, and community-based planning. The materials focus on how communities\u2014particularly vulnerable and underserved populations\u2014can anticipate, prepare for, and respond to climate-related risks through policy, planning, and cross-sector collaboration.',
    subcategories: [
      {
        id: 'federal-national',
        label: 'A. Federal & National Climate Resilience Resources',
        description: 'Resources developed by federal agencies to support climate risk assessment, resilience planning, and disaster preparedness and recovery. These materials include data tools, guidance documents, and policy frameworks that help communities, researchers, and policymakers understand climate risks, strengthen infrastructure, and implement strategies that enhance long-term environmental and community resilience.',
        resources: [
          {
            title: 'Building Community Resilience (Federal Emergency Management Agency, FEMA)',
            url: 'https://www.fema.gov/emergency-managers/risk-management/resilience',
            description: 'Guidance and tools developed by FEMA to help communities prepare for, respond to, and recover from climate-related disasters and extreme events. These resources support risk assessment, hazard mitigation planning, infrastructure protection, and community preparedness efforts that reduce disaster impacts and strengthen long-term resilience.',
          },
          {
            title: 'Climate Resilience Toolkit (National Oceanic and Atmospheric Administration, NOAA)',
            url: 'https://toolkit.climate.gov',
            description: 'A collection of tools, datasets, and case studies designed to support climate-informed decision-making for communities, planners, and policymakers. The toolkit provides guidance on assessing climate risks, understanding local impacts, and developing adaptation strategies that strengthen resilience to climate variability, extreme weather events, and long-term environmental change.',
          },
        ],
      },
      {
        id: 'planning-community',
        label: 'B. Planning & Community-Based Resilience Networks',
        description: 'Resources that support local governments, planners, and community organizations in developing equitable and place-based resilience strategies. These materials highlight collaborative planning approaches, community engagement methods, and policy tools that help address climate risks, strengthen local capacity, and promote inclusive resilience planning tailored to regional environmental and social conditions.',
        resources: [
          {
            title: 'Urban Sustainability Directors Network (USDN)',
            url: 'https://www.usdn.org',
            description: 'A peer network and resource hub for local government leaders working to advance sustainability and climate resilience initiatives. USDN provides tools, research, and collaborative learning opportunities that support equity-focused planning, community engagement, and innovative strategies to help cities address climate risks and build more resilient and inclusive communities.',
          },
          {
            title: 'Resilience & Hazard Mitigation (American Planning Association)',
            url: 'https://www.planning.org/knowledgebase/resilience/',
            description: 'Planning frameworks and best practices that integrate climate risks, public health considerations, and infrastructure resilience into local and regional planning processes. These resources support planners and policymakers in developing strategies that reduce hazard impacts, strengthen community preparedness, and promote sustainable, resilient development in the face of climate and environmental challenges.',
          },
        ],
      },
      {
        id: 'health-energy-climate',
        label: 'C. Health, Energy, and Climate Resilience',
        description: 'Resources highlighting the intersections of climate change, health risks, and energy systems, with particular attention to vulnerable populations. These materials provide research, policy guidance, and practical tools that help communities understand climate-related health impacts, strengthen energy resilience, and develop strategies to protect public health and support equitable climate adaptation.',
        resources: [
          {
            title: 'Climate & Health Program (U.S. Department of Health and Human Services, HHS)',
            url: 'https://www.hhs.gov/climate-change-health-equity-environmental-justice',
            description: 'Resources that examine the links between climate change, environmental exposures, and public health risks. The program provides research, guidance, and tools to help public health agencies, communities, and policymakers understand climate-related health impacts and develop integrated strategies that support health-informed resilience planning and protect vulnerable populations.',
          },
        ],
      },
      {
        id: 'state-regional',
        label: 'D. State & Regional Resilience Planning (South Carolina)',
        description: 'Place-based resources focused on resilience planning, policy development, and climate adaptation at the state and regional levels. These materials provide guidance, planning documents, and policy frameworks that support local governments, researchers, and community organizations in addressing climate risks, strengthening infrastructure, and advancing long-term resilience strategies across South Carolina.',
        resources: [
          {
            title: 'South Carolina Resilience Planning Archives (South Carolina Sea Grant Consortium)',
            url: 'https://www.scseagrant.org/resilience-planning/',
            description: 'A collection of resilience planning documents, proposals, and technical resources related to climate adaptation and hazard mitigation in South Carolina. These materials support researchers, planners, and community leaders in understanding regional climate risks, developing adaptation strategies, and advancing coordinated resilience efforts across coastal and inland communities.',
          },
          {
            title: 'South Carolina Office of Resilience',
            url: 'https://scor.sc.gov/',
            description: 'State-level resources on resilience planning, hazard mitigation strategies, and climate-related policies in South Carolina. The office provides reports, planning guidance, and program information that support state and local efforts to reduce disaster risks, strengthen infrastructure, address flooding and extreme weather impacts, and promote long-term community resilience.',
          },
        ],
      },
    ],
  },
  {
    id: 'clemson-networks',
    title: 'Clemson University Networks & Internal Resources',
    icon: Building,
    description: null,
    subcategories: [
      {
        id: 'clemson-internal',
        label: 'Internal Resources',
        resources: [
          {
            title: 'Building Healthy Communities at Clemson',
            url: '',
            description:
              'Building Healthy Communities is a college-wide effort to improve health and well-being in South Carolina by addressing the social determinants of health through research, partnerships, and community engagement.',
          },
          {
            title: 'Clemson University Center for Public Health Modeling and Response',
            url: '',
            description:
              "Tackles complex public health challenges with innovative solutions through collaborative approach, integrating the knowledge and skills to impactful research and deliver actionable insights for health organizations and communities.",
          },
        ],
      },
    ],
    placeholder: undefined,
  },
  {
    id: 'community-engagement',
    title: 'Community Engagement Organizations',
    icon: Heart,
    description: null,
    subcategories: [
      {
        id: 'ce-orgs',
        label: 'All Organizations',
        resources: [
          {
            title: 'Woodwell Climate Research Center',
            url: 'https://www.woodwellclimate.org',
            description: 'A nonprofit research organization dedicated to advancing climate science and informing solutions to climate change. Woodwell Climate Research Center conducts interdisciplinary research on carbon cycles, climate risks, ecosystems, and energy systems, while working with policymakers, communities, and organizations to translate scientific knowledge into practical climate action and environmental protection strategies.',
          },
          {
            title: 'Coastal Conservation Association (CCA) \u2013 South Carolina',
            url: 'https://ccasouthcarolina.com',
            description: 'A nonprofit organization dedicated to conserving marine resources and protecting coastal ecosystems. CCA South Carolina works with communities, policymakers, and scientists to promote sustainable fisheries management, habitat restoration, and coastal stewardship while supporting public education and community engagement efforts that strengthen environmental conservation along South Carolina\u2019s coastal regions.',
          },
          {
            title: 'South Carolina Environmental Law Project (SCELP)',
            url: 'https://www.scelp.org',
            description: 'A nonprofit public interest law organization dedicated to protecting South Carolina\u2019s natural resources and environmental quality. SCELP provides legal advocacy, policy analysis, and community support to address issues such as coastal protection, water quality, land conservation, and sustainable development while promoting environmental justice and responsible stewardship of the state\u2019s ecosystems.',
          },
          {
            title: 'Clean Air Task Force (CATF)',
            url: 'https://www.catf.us',
            description: 'An international nonprofit organization focused on reducing air pollution and addressing climate change through science-based policy solutions. Founded in 1995, CATF works with governments, researchers, and industry partners to advance clean energy technologies, reduce greenhouse gas emissions, and protect public health by promoting policies that support a low-carbon energy transition.',
          },
          {
            title: 'Clean Energy Innovation Program (ITIF)',
            url: 'https://itif.org',
            description: 'A program of the Information Technology and Innovation Foundation (ITIF) focused on accelerating the development and deployment of clean energy technologies. The program conducts research and policy analysis on energy innovation, technology commercialization, and energy system transformation to support economic growth, reduce emissions, and advance a sustainable energy future.',
          },
          {
            title: 'Climate Emergency Fund',
            url: 'https://www.climateemergencyfund.org',
            description: 'A nonprofit organization that supports grassroots climate activism and movements advocating for urgent climate action. The Climate Emergency Fund provides funding, training, and strategic support to climate activists and organizations working to raise public awareness, influence policy, and accelerate responses to the global climate crisis.',
          },
          {
            title: 'Natural Hazards Center (University of Colorado Boulder)',
            url: 'https://hazards.colorado.edu',
            description: 'A leading research and information hub dedicated to advancing knowledge on natural hazards, disasters, and risk reduction. The Natural Hazards Center connects researchers, practitioners, and policymakers to improve disaster preparedness, mitigation, response, and recovery through interdisciplinary research, data sharing, training programs, and collaboration that supports more resilient communities.',
          },
        ],
      },
    ],
  },
]

// ===================================================================
// PRESENTATION COMPONENTS
// ===================================================================

function ResourceCard({ title, url, description, source }) {
  return (
    <div
      className="group rounded-lg border transition-colors hover:border-[rgba(11,95,165,0.2)]"
      style={{
        background: 'white',
        borderColor: 'rgba(12, 35, 64, 0.08)',
      }}
    >
      <div className="px-5 py-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2 text-base font-semibold leading-snug transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B5FA5] rounded"
          style={{ color: '#0B5FA5' }}
        >
          <span className="flex-1">{title}</span>
          <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-40 group-hover:opacity-80 transition-opacity" />
        </a>
        {source && (
          <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--text)', opacity: 0.7 }}>{source}</p>
        )}
        <p
          className="text-base leading-relaxed mt-1.5"
          style={{ color: 'var(--muted)' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function SubcategoryPill({ label, isActive, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#0B5FA5]"
      style={{
        background: isActive ? 'var(--brand)' : 'white',
        color: isActive ? 'white' : 'var(--muted)',
        border: isActive ? '1px solid var(--brand)' : '1px solid var(--border)',
      }}
    >
      {label}
      <span
        className="text-xs rounded-full px-1.5 py-0.5"
        style={{
          background: isActive ? 'rgba(255,255,255,0.2)' : 'var(--surface)',
          color: isActive ? 'rgba(255,255,255,0.9)' : 'var(--muted)',
        }}
      >
        {count}
      </span>
    </button>
  )
}

// ===================================================================
// PAGE COMPONENT
// ===================================================================

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('public-health-data')
  const [activeSubcategories, setActiveSubcategories] = useState({})

  const currentSection = resourceData.find((s) => s.id === activeCategory)

  const getActiveSubcategory = (sectionId) => {
    const section = resourceData.find((s) => s.id === sectionId)
    if (!section || section.subcategories.length <= 1) return section?.subcategories[0]?.id
    return activeSubcategories[sectionId] || section.subcategories[0].id
  }

  const setSubcategory = (sectionId, subcatId) => {
    setActiveSubcategories((prev) => ({ ...prev, [sectionId]: subcatId }))
  }

  const totalResources = (section) =>
    section.subcategories.reduce((sum, sub) => sum + sub.resources.length, 0)

  return (
    <div style={{ background: 'var(--bg)' }} className="bg-gradient-mesh">
      <Breadcrumbs items={[{ label: 'Resources' }]} />

      {/* Page Header */}
      <section className="page-hero">
        <div className="container max-w-7xl px-6">
          <div className="accent-bar mb-4" />
          <h1
            className="page-hero-title mb-3"
          >
            Resources
          </h1>
          <p
            className="page-hero-description"
          >
            External tools, programs, educational materials, and organizations related to Empower Health topics.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="py-8 md:py-10">
        <div className="container max-w-7xl px-6">

          {/* Mobile Category Selector */}
          <div className="lg:hidden mb-6">
            <label
              htmlFor="category-select"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--muted)' }}
            >
              Select Category
            </label>
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-[var(--focus)]"
              style={{
                background: 'white',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
            >
              {resourceData.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title} ({totalResources(section)})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">

            {/* Left Sidebar — Sticky Category Nav */}
            <aside className="w-[260px] flex-shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-3 px-3"
                  style={{ color: 'var(--muted)' }}
                >
                  Categories
                </p>
                <nav className="space-y-0.5">
                  {resourceData.map((section) => {
                    const IconComponent = section.icon
                    const isActive = activeCategory === section.id
                    const count = totalResources(section)

                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveCategory(section.id)}
                        className="w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center gap-2.5 group"
                        style={{
                          background: isActive ? 'rgba(11, 95, 165, 0.07)' : 'transparent',
                          borderLeft: isActive ? '3px solid #F56600' : '3px solid transparent',
                          color: isActive ? 'var(--text)' : 'var(--muted)',
                        }}
                      >
                        <IconComponent
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: isActive ? 'var(--brand)' : 'var(--muted)' }}
                        />
                        <span className="text-sm font-medium leading-snug flex-1">
                          {section.title}
                        </span>
                        <span
                          className="text-xs tabular-nums"
                          style={{ color: isActive ? 'var(--brand)' : 'var(--muted)' }}
                        >
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="flex-1 min-w-0">
              {currentSection && (
                <div>
                  {/* Section Title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <currentSection.icon
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: 'var(--brand)' }}
                      />
                      <h2
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: 'var(--text)' }}
                      >
                        {currentSection.title}
                      </h2>
                    </div>
                    {currentSection.description && (
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: 'var(--muted)' }}
                      >
                        {currentSection.description}
                      </p>
                    )}
                  </div>

                  {/* Placeholder for sections with no content yet */}
                  {currentSection.placeholder && currentSection.subcategories.length === 0 && (
                    <p
                      className="text-base italic py-8"
                      style={{ color: 'var(--muted)' }}
                    >
                      {currentSection.placeholder}
                    </p>
                  )}

                  {/* Subcategory Pills — only shown when >1 subcategory */}
                  {currentSection.subcategories.length > 1 && (
                    <div
                      className="flex flex-wrap gap-2 pb-4 mb-6"
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      {currentSection.subcategories.map((sub) => (
                        <SubcategoryPill
                          key={sub.id}
                          label={sub.label}
                          count={sub.resources.length}
                          isActive={getActiveSubcategory(currentSection.id) === sub.id}
                          onClick={() => setSubcategory(currentSection.id, sub.id)}
                        />
                      ))}
                    </div>
                  )}

                  {/* Active Subcategory Content */}
                  {currentSection.subcategories.map((sub) => {
                    const isVisible =
                      currentSection.subcategories.length <= 1 ||
                      getActiveSubcategory(currentSection.id) === sub.id

                    if (!isVisible) return null

                    return (
                      <div key={sub.id}>
                        {/* Subcategory description */}
                        {sub.description && (
                          <p
                            className="text-base leading-relaxed mb-5"
                            style={{ color: 'var(--muted)' }}
                          >
                            {sub.description}
                          </p>
                        )}

                        {/* Resource Cards */}
                        {sub.resources.length > 0 && (
                          <div className="space-y-3">
                            {sub.resources.map((resource, idx) => (
                              <div key={idx}>
                                {resource.group && (
                                  <h4
                                    className={`text-sm font-semibold uppercase tracking-wide mb-2 ${idx === 0 ? 'mt-0' : 'mt-6'}`}
                                    style={{ color: 'var(--text)' }}
                                  >
                                    {resource.group}
                                  </h4>
                                )}
                                <ResourceCard
                                  title={resource.title}
                                  url={resource.url}
                                  description={resource.description}
                                  source={resource.source}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
