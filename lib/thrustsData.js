// Centralized Research Thrusts Data
export const thrusts = [
  {
    slug: 'health-co-benefits-electrification',
    number: 1,
    title: 'Health Co-benefits of Electrification and Weatherization',
    subtitle: 'Examining how home electrification and weatherization affect indoor air quality, energy costs, and health outcomes.',
    summary: 'Examining how home electrification and weatherization affect indoor air quality, energy costs, and health outcomes in low- and moderate-income communities.',
    overview: 'Thrust 1 examines how home electrification and weatherization affect indoor air quality, energy costs, and health outcomes in low- and moderate-income communities. We combine data analysis, economic and feasibility studies, surveys, focus groups, and health impact modeling to understand both the benefits and challenges of clean energy transitions at the household level.',
    researchFocus: [
      'Analyzing indoor air pollution (PM2.5, VOCs, and CO₂)',
      'Evaluating costs and practicality of electrification',
      'Assessing changes in utility bills',
      'Estimating potential health improvements before and after home upgrades',
      'Studying community perspectives on weatherization programs',
      'Analyzing health impacts of power outages with focus on energy burden and medical costs'
    ],
    keyThemes: [
      'Indoor air quality improvement',
      'Energy burden reduction',
      'Health impact modeling',
      'Community perspectives',
      'Economic feasibility'
    ],
    currentWork: 'Our work includes analyzing indoor air pollution (such as PM2.5, VOCs, and CO₂), evaluating the costs and practicality of electrification, assessing changes in utility bills, and estimating potential health improvements before and after home upgrades. We also study community perspectives on weatherization programs and the health impacts of power outages, with a focus on energy burden and medical costs.',
    policyRelevance: 'Together, these efforts provide evidence to guide equitable electrification strategies and inform policy and program design that better support vulnerable households.',
    images: [
      {
        src: 'https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/3kb1gn5a_Slide1.jpg',
        alt: 'Diagram showing how climate change policy and public health policy connect through weatherization and electrification to reduce energy burdens and improve health outcomes',
        caption: 'Policy pathways connecting weatherization and electrification to health outcomes'
      },
      {
        src: 'https://customer-assets.emergentagent.com/job_empower-research-1/artifacts/51vqw05u_Slide2.jpg',
        alt: 'Research focus areas showing indoor air quality improvements from electrification and weatherization',
        caption: 'Focus areas and NO2 reduction data from electrification interventions'
      }
    ],
    imageCaption: 'Electrification and weatherization reduce indoor air pollution, energy burden, and greenhouse gas emissions while improving health outcomes in low- and moderate-income households.'
  },
  {
    slug: 'community-microgrids-energy-justice',
    number: 2,
    title: 'Community Microgrids and Energy Justice',
    subtitle: 'Designing people-centered microgrids to enhance resilience and advance equity.',
    summary: 'Designing people-centered microgrids to enhance resilience, reduce energy burden, and advance equity in low- and moderate-income communities.',
    overview: 'Thrust 2 focuses on designing and evaluating community microgrids that enhance energy resilience while advancing energy justice for low- and moderate-income communities. We develop people-centered microgrid systems that prioritize critical services, reduce energy burdens, and protect vulnerable populations during power outages.',
    researchFocus: [
      'Technical system design (solar, wind, energy storage, real-time control)',
      'Health impact assessment of power outages',
      'Justice-focused energy policy analysis',
      'Examining outage effects on mortality and emergency visits',
      'Policy recommendations for equitable infrastructure planning',
      'Community and stakeholder perspectives through surveys, focus groups, and interviews'
    ],
    keyThemes: [
      'Energy resilience',
      'Energy justice',
      'Microgrid design',
      'Vulnerable population protection',
      'Social acceptance'
    ],
    currentWork: 'Our work integrates technical system design (including solar, wind, energy storage, and real-time control), health impact assessment, and justice-focused energy policy analysis. We examine how outages affect mortality and emergency visits, and generate policy recommendations to support equitable infrastructure planning and power system governance.',
    policyRelevance: 'In parallel, we study community and stakeholder perspectives through national surveys, focus groups, and interviews to understand social acceptance, perceived benefits and costs, and barriers to implementation. Together, these efforts aim to ensure that community microgrids are not only technically effective, but also socially inclusive, health-protective, and aligned with long-term equity goals.',
    images: [],
    imageCaption: null,
    // Special visual section for Thrust 2: Microgrid Systems, Modeling, and Applications
    visualSection: {
      title: 'Microgrid Systems, Modeling, and Applications',
      systems: {
        title: 'System & Deployment Context',
        images: [
          {
            src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/u34gp62q_image.png',
            alt: 'Microgrid controller interface with dynamic boundary showing BESS voltage, G1 voltage, current readings, and real-time control system',
            caption: 'Controller for Microgrid with Dynamic Boundary: Real-time monitoring and control system interface'
          },
          {
            src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/2fsuf4bp_image.png',
            alt: 'Aerial view of microgrid deployment showing battery storage, PV panels, microgrid controllers, sectionalizing smart switches, and grid interfaces',
            caption: 'Microgrid Deployment Map: Spatial layout of distributed energy resources and grid components'
          }
        ]
      },
      methods: {
        title: 'Modeling & Methods',
        images: [
          {
            src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/zo0m0t0l_image.png',
            alt: 'Two-stage stochastic programming framework showing first-stage decisions, uncertainty model, and second-stage decisions for equity-embedded resilience planning',
            caption: 'Two-stage stochastic programming for equity-embedded resilience-oriented planning under uncertain post-disaster scenarios'
          }
        ]
      },
      results: {
        title: 'Results & Insights',
        images: [
          {
            src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/3ajezmao_image.png',
            alt: 'Graph showing EPSE system recovery over time comparing optimal investment, half of optimal investment, and original system scenarios',
            caption: 'System-level EPSE recovery trajectory: Impact duration and depth across investment scenarios'
          },
          {
            src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/0du1zv8e_image.png',
            alt: 'Graph showing EPSE by node number comparing optimal investment, half of optimal, and original system across distribution nodes',
            caption: 'Node-level EPSE distribution: Spatial equity analysis across the distribution network'
          }
        ]
      }
    }
  },
  {
    slug: 'built-environment-health',
    number: 3,
    title: 'Built Environment and Health',
    subtitle: 'Understanding how indoor environments and building systems affect health and productivity.',
    summary: 'Understanding how indoor environments, building systems, and energy use affect health, comfort, and productivity in public buildings and low-income housing.',
    overview: 'Thrust 3 focuses on understanding how indoor environments, building systems, and energy use affect health, comfort, and productivity, with particular attention to public buildings and low-income housing.',
    researchFocus: [
      'Integrated models linking IAQ, thermal comfort, ventilation, and occupant productivity',
      'Validation across schools, offices, and residential settings',
      'Physics-based and data-driven HVAC optimization frameworks',
      'Sensor data and building simulation analysis',
      'Control strategies for energy efficiency, air quality, and thermal comfort',
      'Detailed models of low-income residential buildings'
    ],
    keyThemes: [
      'Indoor air quality (IAQ)',
      'Thermal comfort',
      'HVAC optimization',
      'Environmental inequities',
      'Building standards'
    ],
    currentWork: 'We develop integrated models that link indoor air quality (IAQ), thermal comfort, ventilation, and occupant productivity in settings such as schools and offices, helping quantify the health and economic co-benefits of improved indoor environments. These models are validated across multiple real-world scenarios to support evidence-based building design and operation. At the same time, we advance physics-based and data-driven optimization frameworks for HVAC systems to reduce energy consumption while maintaining healthy and comfortable indoor conditions.',
    policyRelevance: 'A core component of this thrust is addressing environmental inequities. We build detailed models of low-income residential buildings to capture housing conditions, occupant behaviors, and common HVAC systems, and analyze disparities in energy use, comfort, and pollutant exposure (including CO₂, PM2.5, and VOCs). These insights support more equitable building standards, retrofit strategies, and policy design.',
    images: [],
    imageCaption: null,
    // Building Systems Visual Section for Thrust 3
    buildingSystemsSection: {
      title: 'Indoor Environment Systems and Modeling Frameworks',
      images: [
        {
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/5g9escnp_t3-1.jpg',
          alt: 'Integrated indoor air quality and thermal comfort system architecture with DOAS (Dedicated Outdoor Air System), FCUs (Fan Coil Units), air cooled chiller, thermal sensors, CO2 sensors, power meters, and heat exchange mechanisms across building zones showing fresh air intake, airflow circulation, and solar radiation effects',
          caption: 'Integrated indoor air quality and thermal comfort system architecture showing DOAS, FCUs, sensors, and heat exchange across building zones'
        },
        {
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/80dpordt_t3-2.png',
          alt: 'Sensor-enabled HVAC airflow and control framework with air handling unit, VAV boxes, zone-level temperature control, CO2 monitoring, thermal sensors, dampers, supply fan, cooling coil, chiller, and return fan for ventilation optimization across multiple building zones',
          caption: 'Sensor-enabled HVAC airflow and control framework illustrating zone-level temperature, CO₂ monitoring, and ventilation optimization'
        }
      ]
    }
  },
  {
    slug: 'climate-energy-health',
    number: 4,
    title: 'Climate, Energy and Health Integration',
    subtitle: 'Developing data-driven tools to identify and reduce energy–health vulnerabilities.',
    summary: 'Developing data-driven tools and analyses to identify, visualize, and reduce energy–health vulnerabilities across communities.',
    overview: 'Thrust 4 develops data-driven tools and analyses to identify, visualize, and reduce energy–health vulnerabilities across communities, with a focus on low-income and socially disadvantaged populations.',
    researchFocus: [
      'Interactive ArcGIS-based energy–health vulnerability mapping platform',
      'Integration of census, environmental, energy, and public health data',
      'Advanced geospatial modeling and machine learning methods',
      'Analysis of power outages, climate change beliefs, and extreme weather health effects',
      'Open-access data infrastructure development',
      'Public dashboards for visualization and decision support'
    ],
    keyThemes: [
      'Vulnerability mapping',
      'Geospatial analysis',
      'Machine learning',
      'Open data infrastructure',
      'Decision support tools'
    ],
    currentWork: 'We build an interactive, ArcGIS-based energy–health vulnerability mapping platform by integrating data from census, environmental, energy, and public health sources. The tool combines social vulnerability, environmental exposure, energy burden, and health indicators to support local validation in Tennessee and scalable applications at state and national levels. Advanced geospatial modeling and machine learning methods are used to examine how energy insecurity and environmental risks translate into unequal health outcomes over time.',
    policyRelevance: 'To support transparency and long-term impact, Thrust 4 also establishes an open-access data infrastructure that links environmental justice, health, and energy datasets and provides public dashboards for visualization and decision support. Together, these efforts enable evidence-based planning, targeted interventions, and more equitable energy and public health policies.',
    images: [],
    imageCaption: null,
    // Time-series spatial analysis section for Thrust 4
    timeSeriesSection: {
      title: 'Spatial Patterns of Energy Burden and Vulnerability',
      groupCaption: 'Maps illustrate persistent and evolving geographic inequities in outage exposure, motivating integrated energy–health vulnerability analysis.',
      maps: [
        {
          year: 2018,
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/pbs3rtmv_t4-1.jpg',
          alt: 'U.S. county-level choropleth map showing customer-weighted outage hours in 2018, with quintile-based energy burden classification (Q1 lowest to Q5 highest) revealing geographic patterns of power outage exposure across the continental United States',
          caption: 'Customer-Weighted Outage Hours by County (2018, Quintiles Q1–Q5)'
        },
        {
          year: 2020,
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/9eh82kre_t4-2.jpg',
          alt: 'U.S. county-level choropleth map showing customer-weighted outage hours in 2020, with quintile-based energy burden classification (Q1 lowest to Q5 highest) revealing geographic patterns of power outage exposure across the continental United States',
          caption: 'Customer-Weighted Outage Hours by County (2020, Quintiles Q1–Q5)'
        },
        {
          year: 2022,
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/i1f23vya_t4-3.jpg',
          alt: 'U.S. county-level choropleth map showing customer-weighted outage hours in 2022, with quintile-based energy burden classification (Q1 lowest to Q5 highest) revealing geographic patterns of power outage exposure across the continental United States',
          caption: 'Customer-Weighted Outage Hours by County (2022, Quintiles Q1–Q5)'
        }
      ]
    }
  },
  {
    slug: 'health-intervention',
    number: 5,
    title: 'Health Intervention',
    subtitle: 'Translating research into action through home-based health and energy interventions.',
    summary: 'Translating research into action by implementing and evaluating home-based health and energy interventions in low- and moderate-income communities.',
    overview: 'Thrust 5 translates research into action by implementing and evaluating home-based health and energy interventions in low- and moderate-income communities. Working closely with community partners and public health practitioners, we design and deliver targeted weatherization and electrification improvements to reduce energy risks, improve indoor air quality, and enhance household safety and comfort.',
    researchFocus: [
      'In-home visits for prioritized upgrades',
      'Referrals to energy assistance and weatherization programs',
      'Household-level education on safe energy use',
      'Post-intervention follow-ups tracking health, comfort, and living conditions',
      'Program effectiveness and equity impact evaluation',
      'Barrier and facilitator identification for implementation'
    ],
    keyThemes: [
      'Community partnerships',
      'Home-based interventions',
      'Program evaluation',
      'Equity impacts',
      'Community engagement'
    ],
    currentWork: 'Our team coordinates in-home visits to provide prioritized upgrades, referrals to energy assistance and weatherization programs, and household-level education on safe energy use and healthy indoor environments. We conduct post-intervention follow-ups to track short-term changes in health, comfort, and living conditions, and monitor key health and environmental indicators where available. We also evaluate program effectiveness and equity impacts across participating households, identifying barriers and facilitators to successful implementation.',
    policyRelevance: 'Community engagement is a central component of this thrust. Through regular town halls, stakeholder meetings, and structured feedback collection, we ensure that community voices inform our findings and recommendations, helping shape more inclusive, trusted, and effective health and energy policies.',
    images: [],
    imageCaption: null,
    // Program & Outreach section for Thrust 5
    programOutreachSection: {
      title: 'Program & Outreach',
      images: [
        {
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/5twna24r_t5-1.png',
          alt: 'Healthy Home Assessment infographic showing how greenspaces can help with environmental health, featuring assessment categories for air quality, energy efficiency, and home safety',
          caption: 'Healthy Home Assessment & Environmental Supports'
        },
        {
          src: 'https://customer-assets.emergentagent.com/job_academic-hub-214/artifacts/gl7zvmn8_t5-2.png',
          alt: 'Family-centered outreach photo showing community engagement with the message Better worlds start with great families',
          caption: 'Family-centered outreach and health intervention engagement'
        }
      ]
    }
  },
  {
    slug: 'policy-citizen-science',
    number: 6,
    title: 'Policy Recommendations and Citizen Science',
    subtitle: 'Bridging research, policy, and community action through co-design strategies.',
    summary: 'Bridging research, policy, and community action through practical policy recommendations and participatory co-design strategies.',
    overview: 'Thrust 6 bridges research, policy, and community action by translating scientific evidence into practical policy recommendations and participatory co-design strategies that advance healthy and equitable clean energy transitions.',
    researchFocus: [
      'Policy guidance on weatherization with electrification',
      'Community microgrids and energy justice policy',
      'Microgrids and public health policy',
      'Built environment of public housing',
      'Resilience and health policies at county level',
      'Citizen science and public communication strategies'
    ],
    keyThemes: [
      'Policy recommendations',
      'Community co-design',
      'Health co-benefits',
      'Citizen science',
      'Public communication'
    ],
    currentWork: 'We develop policy guidance on key areas including weatherization with electrification, community microgrids and energy justice, microgrids and public health, and the built environment of public housing. Our work also examines resilience and health policies at the county level to identify gaps, best practices, and opportunities for targeted intervention. Community co-design is central to this thrust. We work directly with residents, local organizations, and decision-makers to shape solutions that reflect lived experience, local priorities, and real-world constraints.',
    policyRelevance: 'In parallel, we identify and promote pathways for maximizing health co-benefits from clean energy transitions, such as improved indoor air quality, reduced energy burden, and greater resilience to extreme weather. Finally, we advance citizen science and public communication by sharing research findings in accessible formats, empowering communities to engage with data, contribute local knowledge, and participate meaningfully in energy and health decision-making.',
    images: [],
    imageCaption: null
  }
];

// Helper functions
export function getThrustBySlug(slug) {
  return thrusts.find(t => t.slug === slug) || null;
}

export function getAllThrustSlugs() {
  return thrusts.map(t => t.slug);
}

export function getNextThrust(currentSlug) {
  const currentIndex = thrusts.findIndex(t => t.slug === currentSlug);
  if (currentIndex < thrusts.length - 1) {
    return thrusts[currentIndex + 1];
  }
  return null;
}

export function getPreviousThrust(currentSlug) {
  const currentIndex = thrusts.findIndex(t => t.slug === currentSlug);
  if (currentIndex > 0) {
    return thrusts[currentIndex - 1];
  }
  return null;
}
