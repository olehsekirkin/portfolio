export default {
    id: "project-4",
    title: "Competitive Intelligence Analysis for Kimball International",
    image: "/images/comp.png",
    description: "Drove data-backed market strategy for Kimball International by analyzing competitor pricing, features, and customer behavior across digital channels. Identified untapped $500-700 mid-tier market opportunity and revealed 47% surge in digital-first purchases, enabling strategic positioning in the growing ergonomic office chair segment.",
    technologies: ["Python", "Microsoft Excel", "Web Scraping", "Competitive Intelligence Analysis"],
    date: "2024-02-01",
    content: `
<html>
<head>
    <style>
        .analysis-container {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 20px 0;
            max-width: 1200px;
            margin: 0 auto;
        }
        .text-content {
            margin-bottom: 25px;
            line-height: 1.6;
        }
        .visualizations-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            margin: 20px 0;
        }
        .visualization-card {
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .visualization-title {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
            text-align: center;
        }
        .visualization-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        .section-header {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin: 30px 0 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eee;
        }
        .list-content {
            padding-left: 20px;
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
        <!-- Introduction -->
        <div class="text-content">
            <p>This report provides a strategic view of the office chair market, examining the competitive landscape to inform Kimball International's product and market strategies. The focus lies on understanding pricing structures, feature trends, brand positioning, and customer satisfaction metrics using direct competitor data. Key takeaways include opportunities in pricing gaps, potential feature enhancements, and insights into customer preferences.</p>
            
            <p>&nbsp; &nbsp; 1. Pricing Strategy Analysis<br />&nbsp; &nbsp; 2. Feature and Differentiation Analysis<br />&nbsp; &nbsp; 3. Brand Positioning and Market Presence<br />&nbsp; &nbsp; 4. Customer Satisfaction and Pain Points<br />&nbsp; &nbsp; 5. Recommendations, Strategic Opportunities and Conclusion</p>
        </div>

        <!-- Pricing Strategy Analysis -->
        <div class="section-header">1. Pricing Strategy Analysis</div>
        <div class="text-content">
            <p>The goal of this analysis is to identify how competitors position their products across various price tiers and leverage discount strategies. By understanding these pricing dynamics, Kimball International can pinpoint specific market gaps, where it may introduce new products or adjust pricing strategies to attract underserved customer segments.</p>
            
            <p>Using competitor data obtained from web scraping Amazon, the following pricing tiers were established:</p>
            
            <p>&nbsp; &nbsp; - Low Tier: products priced below $300.<br />&nbsp; &nbsp; - Mid Tier: products priced between $300 and $800.<br />&nbsp; &nbsp; - High Tier: products priced above $800, including high-end brands MillerKnoll.</p>
            
            <p>Given the distribution of competitor products across pricing tiers, Kimball has an opportunity to strategically position itself within the Mid Tier and High Tier segments with targeted offerings:&nbsp;</p>
            
            <p>&nbsp; &nbsp; 1) Target the mid tier with enhanced ergonomic features:</p>
            
            <div class="highlight-box">
                <p>We have a market gap where most mid tier ($300-$800) competitors offer basic ergonomic features, by adding enhanced support and higher-quality materials, Kimball can appeal to buyers seeking comfort and durability at an accessible price. The audience for this tiera attracts budget-conscious professionals and remote workers, balancing cost-effectiveness with essential ergonomic quality.</p>
            </div>
            
            <p>&nbsp; &nbsp; 2) Explore a niche in the high tier:</p>
            
            <div class="highlight-box">
                <p>We have the opportunity, as the high tier (above $800) right now is dominated by a few premium brands, but there's room for offerings that deliver similar quality at slightly lower prices. Limited-edition or specialized high-end chairs can capture corporate buyers and inidividuals looking for premium features without paying a luxury brand premium, enhancinh Kimball's brand prestige in this segment.</p>
            </div>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Price Distribution Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/wQwXKF0/1.png" alt="Price Distribution Analysis" />
        </div>

        <div class="text-content">
            <p>Now, when looking and discounting patterns the data reveals competitors frequantyl use discounts, with price reductions of 10-20% from the original prices. Notably, the "old price" data shows a patterns where products in the low tier are discounted to clear inventory, and mid and high tier products use discounts as promotional tools, likely to attract price-sensitive customers.</p>
        </div>

        <!-- Feature and Differentiation Analysis -->
        <div class="section-header">2. Feature and Differentiation Analysis</div>
        <div class="text-content">
            <p>To identify popular features and unique selling points that competitors employ, guiding potential product improvements, with consideration of market trends and growth projections.</p>
            
            <p>Analysis of feature descriptions from competitors, combined with market projections showing an 8% CAGR through 2028, highlights growing consumer demand for:</p>
            
            <p>&nbsp; &nbsp; - Adjustability (lumbar support, armrests, headrests)<br />&nbsp; &nbsp; - Ergonomic Design (especially for chairs in the mid and high tiers)<br />&nbsp; &nbsp; - Material Quality (mesh and fabric choices)</p>
            
            <p>Analysis of feature ratings shows that product quality metrics consistently achieve high customer satisfaction scores. Durability stands out with a 4.2/5 rating, while adjustability and ergonomic features both maintain strong performance at 4.0/5. These ratings suggest that while ergonomic features are important, build quality and durability could provide stronger market differentiation. This aligns with market research showing sustained growth in the ergonomic office furniture segment, where manufacturing quality is becoming increasingly important to consumers alongside traditional ergonomic features.</p>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Feature Rating Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/bWXrJWq/2.png" alt="Feature Rating Analysis" />
        </div>
        <div class="section-header">3. Brand Positioning and Market Presence</div>
        <div class="text-content">
            <p>To assess the top-performing brands, understand their market positioning, and analyze merchant presence for online competitiveness.</p>
            
            <p>Competitors like MillerKnoll lead in the high-end segment with premium ergonomic solutions and strong brand recognition. Other emerging brands focus on cost-effective ergonomic models with limited adjustability, targeting budget-conscious customers. Merchant presence analysis reveals a trend of Amazon-exclusive sellers in the lower price segment, while established brands dominate the mid to high tiers with direct distribution strategies.</p>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Brand Market Share Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/y6rRBY8/3.png" alt="Brand Market Share" />
        </div>

        <div class="text-content">
            <p>Industry research indicates a significant shift toward digital sales channels in the office furniture market, with Amazon emerging as a key player, particularly in the mid-range ergonomic chair segment. According to Statista's 2024 market analysis, e-commerce accounts for 35-40% of office furniture sales, with an annual growth rate of 15% in online channel adoption. Amazon's marketplace specifically has shown notable growth, capturing 25% of online office furniture sales in North America. Key market indicators supporting this trend include:</p>
            
            <p>&nbsp; &nbsp; - A 47% increase in digital-first office furniture purchases since the pandemic.<br />&nbsp; &nbsp; - Average consumer researchs time of 2-3 weeks before purchase, with 80% of buyers consulting online reviews.<br />&nbsp; &nbsp; - Mobile device usage accounting for 55% of product research in the category.<br />&nbsp; &nbsp; - Price points between $200-500 showing the highest volume of online sales, particularly for ergonomic chairs.</p>
            
            <p>Direct-to-consumer (D2C) brands entering the market through online channels have grown their collective market share from 8% in 2019 to approximately 18% in 2023, demonstrating the viability of digital-first strategies. Traditional retailers who have invested in omnichannel capabilities have seen an average 24% increase in total sales compared to brick-and mortar-only operations.</p>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Digital Sales Channel Growth</div>
            <img class="visualization-image" src="https://i.ibb.co/smT236n/4.png" alt="Digital Sales Growth" />
        </div>

        <div class="text-content">
            <p>This shift in consumer buying behavior reinforces the critical importance of establishing a strong online presence and optimizing digital touchpoints across the customer journey. Success in the current market increasingly depends on factors such as: strategic marketplace positioning, robust product content and visualization, customer review management, competitive pricing transparency, efficient fulfillment capabilities.</p>
        </div>

        <!-- Customer Satisfaction Section -->
        <div class="section-header">4. Customer Satisfaction and Pain Points</div>
        <div class="text-content">
            <p>Objective of this part of the analysis is to identify common customer complaints and satisfaction levels, providing insights into areas where Kimball can differentiate.</p>
            
            <p>Analysis of reviews shows recurring issues across competitors:</p>
            
            <p>&nbsp; &nbsp; - Durability: low and mid tier products often receive complaints regarding long-term durability.<br />&nbsp; &nbsp; - Comfort: customer frequently cite discomfort for extended use, even in ergonomic chairs.<br />&nbsp; &nbsp; - Assembly Difficulties: many reviews indicate difficulty in assembly, which impacts overall satisfaction.</p>
        </div>

        <!-- Recommendations Section -->
        <div class="section-header">5. Recommendations and Strategic Opportunities</div>
        <div class="text-content">
            <p>Based on the market analysis, recommendations are focused on three key strategic areas that leverage identified opportunities while addressing competitive gaps and customer needs:</p>
            
            <div class="highlight-box">
                <p>&nbsp; &nbsp; 1) Product Development Strategy</p>
                <p>The analysis reveals significant opportunity in both mid-tier ($500-$700) and premium ($800-$1000) segments. Kimball should prioritize developing a signature ergonomic line targeting remote workers in the mid-tier, while strategically entering the premium segment with innovative features at more competitive price points than established brands like MillerKnoll. The 8% CAGR in ergonomic solutions through 2028 supports this dual-segment approach.</p>
            </div>
            
            <div class="highlight-box">
                <p>&nbsp; &nbsp; 2) Digital Channel Optimization</p>
                <p>With e-commerce representing 35-40% of market sales and mobile devices driving 55% of product research, digital presence requires immediate attention. Focus should be placed on developing an optimized omnichannel strategy, particularly on Amazon's marketplace where 25% of online furniture sales occur. Priority should be given to robust product visualization, mobile-first content, and strategic pricing in the high-volume $200-500 range.</p>
            </div>
            
            <div class="highlight-box">
                <p>&nbsp; &nbsp; 3) Distribution Network Optimization</p>
                <p>The shift toward digital-first purchasing (47% increase since the pandemic) demands a balanced approach to distribution. Traditional retailers with omnichannel capabilities show 24% higher sales, suggesting Kimball should develop an integrated network combining digital presence with strategic physical showrooms. This approach particularly supports the growth in D2C brands, which have expanded from 8% to 18% of the market share since 2019.</p>
            </div>
            
            <p>By leveraging these insights, Kimball International can strategically position itself within the competitive office chair market, targeting unmet needs and aligning with consumer preferences. This data-backed approach ensures that Kimball not only stays competitive but also meets the evolving demands of today's office furniture market.</p>
        </div>
    </div>
</body>
</html>
    `
  };