export default {
    id: "project-9",
    title: "EcomVitals: Performance Meets Profit in Ecommerce Optimization",
    image: "/images/ecomvitals.jpg",
    description: "Built a full-stack web application that audits ecommerce websites using Lighthouse and Puppeteer, translating Core Web Vitals into actionable, business-impactful insights with tailored recommendations and conversion revenue projections.",
    technologies: ["React", "TypeScript", "Node.js", "Lighthouse", "Puppeteer", "Tailwind CSS"],
    date: "2025-04-01",
    content: `
  <html>
  <head>
    <style>
      .analysis-container {
        font-family: system-ui, -apple-system, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      .text-content {
        margin-bottom: 25px;
        line-height: 1.6;
      }
      .section-header {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin: 30px 0 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #eee;
      }
      .highlight-box {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="analysis-container">
      <div class="text-content">
  <p>In the digital world of ecommerce, milliseconds can mean millions. Load times, layout stability, and interactivity don’t just affect user experience, they directly influence conversions, revenue, and search visibility. That's the exact problem <strong>EcomVitals</strong> was built to solve.</p>

  <p>This project isn't just another performance testing tool. It’s a business intelligence engine, custom-built for ecommerce sites. EcomVitals translates raw technical performance data into actionable insights that directly tie back to what really matters, <strong>conversions, revenue, SEO rankings, and user trust</strong>.</p>

  <!-- INSERTED VIDEO SECTION -->
  <div class="section-header">Demo Video</div>
  <div class="text-content" style="margin-top: 20px;">
    <video controls width="100%" style="border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 960px; margin: 0 auto; display: block;">
      <source src="/videos/ecomdemo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <!-- END VIDEO SECTION -->
</div>
  
      <div class="section-header">What is EcomVitals?</div>
      <div class="text-content">
        <p>EcomVitals is a modern web application that audits ecommerce websites using real-world performance metrics, like Core Web Vitals, and turns them into tailored recommendations with business projections. From identifying layout shifts caused by specific DOM elements to predicting revenue uplift from speed improvements, this tool brings technical and business worlds together.</p>
        <p>Where traditional tools end with scores and graphs, EcomVitals continues the journey by offering:</p>
        <ul>
          <li>Concrete, prioritized action plans</li>
          <li>Conversion and revenue impact projections</li>
          <li>Detailed root cause analysis</li>
          <li>Industry-specific benchmarks</li>
          <li>Competitive performance comparisons</li>
        </ul>
      </div>
  
      <div class="section-header">Technical Architecture</div>
      <div class="text-content">
        <p>The frontend is built with React and TypeScript, using a component-based architecture with Tailwind CSS and shadcn/ui for styling. TanStack Query ensures efficient data fetching and caching.</p>
        <p>The backend leverages Node.js with Express to interface with Puppeteer and run Lighthouse audits. Data is processed, stored, and compared across sessions using a modular, scalable storage architecture.</p>
      </div>
  
      <div class="section-header">Storage and Analysis Engine</div>
      <div class="text-content">
        <p>Each analysis is stored in a structured format enabling historical comparisons. The recommendation engine uses an impact-to-effort scoring system to prioritize fixes. DOM elements and third-party scripts are analyzed for their load time contribution and blocking behavior. Competitive comparisons are powered by asynchronous audits and benchmark databases.</p>
      </div>
  
      <div class="section-header">How It Works</div>
      <div class="text-content">
        <p>Users enter a URL, which triggers a Lighthouse audit through Puppeteer. Metrics like LCP, CLS, and FID are gathered, and individual elements are traced through their CSS selectors. A custom algorithm assesses performance impact and generates projections on revenue and conversions. Results are presented in a dynamic dashboard with drill-down capabilities.</p>
      </div>
  
      <div class="section-header">User Workflow</div>
      <div class="text-content">
        <p>1. Submit URL</p>
        <p>2. View audit results and visualizations</p>
        <p>3. Explore each issue and affected elements</p>
        <p>4. Review impact scores and effort levels</p>
        <p>5. Implement recommended fixes</p>
        <p>6. Re-run audits and compare improvements</p>
      </div>
  
      <div class="section-header">Real-World Application Example</div>
      <div class="text-content">
        <p>Imagine an online fashion store with a CLS of 0.42 caused by banner ads. EcomVitals identifies the banner element and suggests deferring its load. The tool estimates a potential 3.5% conversion lift. After implementation, the site sees improved rankings and lower bounce rates, generating an estimated $180,000 in extra revenue annually.</p>
      </div>
  
      <div class="section-header">Development Challenges</div>
      <div class="text-content">
        <p>Challenges included handling asynchronous audits, managing Puppeteer failures, and designing a clean UI for dense data. I resolved these by implementing retry logic, separating the backend audit queue, and building reusable frontend components with progressive disclosure.</p>
      </div>
  
      <div class="section-header">Highlight Features</div>
      <div class="text-content">
        <ul>
          <li>Core Web Vitals breakdown and improvement guidance</li>
          <li>Element-level analysis with CSS selector insights</li>
          <li>Third-party script impact scoring</li>
          <li>Revenue and conversion projection models</li>
          <li>Competitor benchmarking engine</li>
        </ul>
      </div>
  
      <div class="section-header">Differentiation</div>
      <div class="text-content">
        <p>Unlike PageSpeed Insights or WebPageTest, EcomVitals tailors insights to ecommerce businesses. It adds value with business projections, prioritization scoring, and a comparative analysis engine that positions a site against its competition in real terms, not just scores.</p>
      </div>
  
      <div class="section-header">Technical Highlights</div>
      <div class="text-content">
        <p>Built with scalable architecture, robust API handling, modular visual components, and strict TypeScript typing. Accessibility and mobile-first best practices were followed throughout. Each module was tested with mocked audits and live production checks.</p>
      </div>
  
      <div class="section-header">What’s Next</div>
      <div class="text-content">
        <ul>
          <li>Historical performance timelines and reports</li>
          <li>Team collaboration dashboard</li>
          <li>Code snippet suggestions for common fixes</li>
          <li>Automated A/B testing integration</li>
        </ul>
      </div>
  
      <div class="section-header">Final Thoughts</div>
      <div class="text-content">
        <p>EcomVitals bridges the gap between tech and business. It’s a developer’s toolkit and a marketer’s playbook in one. From frontend polish to backend rigor, this project demonstrates my ability to build with clarity, purpose, and measurable impact.</p>
      </div>
    </div>
  </body>
  </html>
    `
  };
  