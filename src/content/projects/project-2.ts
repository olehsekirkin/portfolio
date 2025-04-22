export default {
  id: "project-2",
  title: "Motor Vehicle Collisions",
  image: "/images/cars.png",
  description: "Using geospatial analysis and statistical testing, I pinpointed high-risk crash zones and patterns in NYC’s traffic data. I found strong links between when and where accidents happened and how severe they were (with a significance level of p < 0.001). These insights helped inform smarter emergency response strategies and targeted safety improvements.",
  technologies: ["Python", "Folium", "Statistical Testing Tools", "Data Analysis"],
  date: "2024-02-01",
  content: `
<html>
<head>
    <style>
        .analysis-container {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 20px auto;
            max-width: 1200px;
            padding: 0 20px;
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
            width: 480px;
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
        .side-by-side {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }
        .link-style {
            color: #0066cc;
            text-decoration: none;
        }
        .link-style:hover {
            text-decoration: underline;
        }
        .highlight-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .full-width {
            grid-column: 1 / -1;
        }
    </style>
</head>
<body>
    <div class="analysis-container">
        <div class="text-content">
            <p>In this article, we'll explore an extensive Exploratory Data Analysis (EDA) project focused on Motor Vehicle Collisions. The project aims to uncover patterns, trends, and insights from crash data, which can be invaluable for improving road safety and informing policy decisions. We'll walk through each step of the analysis, explaining the methods used and the findings uncovered, before concluding with key insights and recommendations.</p>
            
            <p>&nbsp; &nbsp; 1. Data Understanding and Preparation<br />&nbsp; &nbsp; 2. Descriptive Statistics<br />&nbsp; &nbsp; 3. Geospatial Analysis<br />&nbsp; &nbsp; 4. Injury and Fatality Analysis<br />&nbsp; &nbsp; 5. Contributing Factor Analysis<br />&nbsp; &nbsp; 6. Vehicle Type Analysis<br />&nbsp; &nbsp; 7. Conclusion, Key Insights and Recommendations</p>
        </div>

        <!-- Data Understanding Section -->
        <div class="section-header">1. Data Understanding and Preparation</div>
        <div class="text-content">
            <p>The first step in any data analysis project is to understand and prepare the data. This phase involved loading the dataset using pandas and examining its structure, checking for missing values and deciding on appropiate handling methods, verifying data ypes and converting them if necessary, identifying and handling outliers or anomalies and creating derived features (.e.g, day of week, month, year from crash date). Missing numerical values were filled with the median, and missing categorical values were filled with the mode.</p>
        </div>

        <!-- Descriptive Statistics Section -->
        <div class="section-header">2. Descriptive Statistics</div>
        <div class="text-content">
            <p>The next phase involved calculating summary statistics and generating visualizations to understand the basic characteristics of the data, which included calculating summary statistics for numerical columns, generating requency distributions for categorical variables and analyzing temporal patterns (such as daily, weekly, monthly and yearly trends).</p>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">What day is people having more accidents?</div>
                <img class="visualization-image" src="https://i.ibb.co/RQ4r4bQ/1.png" alt="Crash Frequency Analysis" />
            </div>
            
            <div class="side-by-side">
                <div class="visualization-card">
                    <div class="visualization-title">What month?</div>
                    <img class="visualization-image" src="https://i.ibb.co/pwnkx3r/2.png" alt="Temporal Distribution" />
                </div>
                <div class="visualization-card">
                    <div class="visualization-title">And what year? (2024 ongoing data)</div>
                    <img class="visualization-image" src="https://i.ibb.co/wJQd9Xq/3.png" alt="Weekly Patterns" />
                </div>
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Heatmap of Crashes by Day/Hour</div>
                <img class="visualization-image" src="https://i.ibb.co/w6FHNVZ/4.png" alt="Seasonal Distribution" />
            </div>
        </div>

        <!-- Geospatial Analysis Section -->
        <div class="section-header">3. Geospatial Analysis</div>
        <div class="text-content">
            <p>Given the geographical nature of the data, a geospatial analysis was conducted, which involved the creation of a heatmap crash location using latitude and longitude data, analysis of crash distribution by borough and zip code, and identifying high-risk areas or intersections.</p>
            <p>Here I used Folium to create interactive maps, including a heatmap layer to visualize crash density and identify areas with hih crash concentrations, which could be prioritized for safety interventions. Here is a picture of how the map looks like around Central Park.</p>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Crash Density Heatmap - Central Park Area</div>
            <img class="visualization-image" src="https://i.ibb.co/MgB0Kfy/image-16.webp" alt="Central Park Crash Heatmap" />
        </div>
        <div class="section-header">4. Injury and Fatality Analysis</div>
        <div class="text-content">
            <p>A critical aspect of crash analysis is understanding the severity of incidents, this section here focused on comparing injury and fatality across different categories (pedestrians, cyclists, motorists) and analyzing the relationship between injury severity and other factors (time of day, location, contributing factors). The analysis included creating severity categories and visualizing their distribution across various factors. Statistical tests, such as chi-square and ANOVA, were used to validate the significante of observed differences.</p>
            
            <div class="highlight-box">
                <p><a href="https://www.bmj.com/about-bmj/resources-readers/publications/statistics-square-one/8-chi-squared-tests" class="link-style">Chi-square test</a>&nbsp;for Severity vs. Borough: p-value = 2.5002712420019383e-61</p>
                <p><a href="https://www.investopedia.com/terms/a/anova.asp" class="link-style">ANOVA test</a>&nbsp;for Severity vs. Hour of Day: p-value = 0.001110825445747302</p>
            </div>
            
            <p>This extremely small p-value (Chi-square test), much less than the common significance level of 0.05, suggest there is strong evidence of a statistically significant association between the severity of incidents and the borough where they occur. In other words, the severity of incidents is not randomly distributed across boroughs, but there are meaningful differences in severity patterns among different boroughs.</p>
            
            <p>Talking about the ANOVA test, the p-value is also smaller than the typical significance level of 0.05, indicating that there is a statistically significant relationship between the severity of incidents and the hour of the day when they occur. This suggest that the time of the day has a meaningful impact on the severity of incidents.</p>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">What borough is seeing more accidents?</div>
                <img class="visualization-image" src="https://i.ibb.co/YZ947DY/image-2024-09-08-220752989.webp" alt="Severity by Borough" />
            </div>
            
            <div class="side-by-side">
                <div class="visualization-card">
                    <div class="visualization-title">What hour of the day is having what type of accidents?</div>
                    <img class="visualization-image" src="https://i.ibb.co/FBhhhfw/image-2024-09-08-220758610.webp" alt="Hourly Severity" />
                </div>
                <div class="visualization-card">
                    <div class="visualization-title">What borough is having what type of accidents?</div>
                    <img class="visualization-image" src="https://i.ibb.co/FJPgjTY/image-17.webp" alt="Severity Distribution" />
                </div>
            </div>

            <div class="highlight-box">
                <p>In both cases, we reject the null hypothesis of no association. These results imply:</p>
                <p>1) The borough where an incident ocurrs, is related to its severity. Some boroughs may have more severe accidents than others.<br />2) The hour of the day when an incident occurs is related to its severity. Certain times of day may be associated with more severe incidents.</p>
                <p>These findings could have important implications for resource allocation, policy-making and targeted interventions in different boroughs and at different times of the day.</p>
            </div>

            <div class="visualization-card">
                <div class="visualization-title">Who is getting in more and worse accidents?</div>
                <img class="visualization-image" src="https://i.ibb.co/51VDShM/image-2024-09-08-220805563.webp" alt="Time Severity Analysis" />
            </div>
        </div>

        <!-- Contributing Factors Analysis Section -->
        <div class="section-header">5. Contributing Factors Analysis</div>
        <div class="text-content">
            <p>Understanding what contributes to crashes is crucial for prevention. For this part of the data analysis I identified the most common contributing factors, analyzed how contributing factors vary by location, tiem, or injury severity, and examined interactions between multiple contributing factors.</p>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">Why is people having accidents?</div>
                <img class="visualization-image" src="https://i.ibb.co/m0p459G/1bb0416d-290c-4348-b2c7-13204c96554f.png" alt="Contributing Factors" />
            </div>
            
            <div class="side-by-side">
                <div class="visualization-card">
                    <div class="visualization-title">The why and where of the accidents</div>
                    <img class="visualization-image" src="https://i.ibb.co/Svg3ZkT/c4702db1-6c19-491a-8fdb-a2d1850ae20b.png" alt="Factor Distribution" />
                </div>
                <div class="visualization-card">
                    <div class="visualization-title">The why and when of the accidents</div>
                    <img class="visualization-image" src="https://i.ibb.co/4gFS6St/ce079e72-e826-451e-abf9-c7069eb9405e.png" alt="Factor Correlation" />
                </div>
            </div>

            <div class="visualization-card">
                <div class="visualization-title">The why and how bad is the accident</div>
                <img class="visualization-image" src="https://i.ibb.co/f8xjNDr/1ba8c61f-6f92-4940-8772-27fef3f1e5ce.png" alt="Factor Impact" />
            </div>
        </div>

        <!-- Vehicle Type Analysis Section -->
        <div class="section-header">6. Vehicle Type Analysis</div>
        <div class="text-content">
            <p>Different vehicle types may have different crash patterns and severity outcomes. This section explored the crash patterns by vehicle type, and whether certain vehicle types are associated with higher injury or fatality rates.</p>
            <p>The analysis included visualizing the distribution of vehicle types involved in crashes and examining how crash patterns varied by time of day for different vehicle types. Statistical tests were performed to determine if differences in injury and fatality rates across vehicle types were significant.</p>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">Vehicle Type Distribution</div>
                <img class="visualization-image" src="https://i.ibb.co/qBNhM6r/image-21.webp" alt="Vehicle Distribution" />
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Vehicle Crash Patterns</div>
                <img class="visualization-image" src="https://i.ibb.co/Br8ZQ80/image-2024-09-08-223154494.webp" alt="Crash Patterns" />
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Vehicle Type Impact Analysis</div>
                <img class="visualization-image" src="https://i.ibb.co/vhY7Zx7/image-2024-09-08-223205281.webp" alt="Impact Analysis" />
            </div>
        </div>

        <!-- Conclusion Section -->
        <div class="section-header">7. Conclusion, Key Insights and Recommendations</div>
        <div class="text-content">
            <p>Based on the data analysis conducted, several key insights emerge:</p>
            <div class="highlight-box">
                <p>&nbsp; &nbsp; 1) Temporal patterns: crashes show distinct patterns by time of day, day of week, and season. Understanding these patterns can help target safety measures more effectively.</p>
                <p>&nbsp; &nbsp; 2) Geographic hotspots: The geospatial analysis revealed areas with high crash concentrations. These hotspots should be prioritized for safety interventions.</p>
                <p>&nbsp; &nbsp; 3) Contributing factors: certain factors consistenyl contribute to crashes across different contexts. Addressing these common factors could have a significant impact on overall crash reduction.</p>
                <p>&nbsp; &nbsp; 4) Vehicle type impact: differente vehicle types show varying patterns in term of crash frequency and severity. This suggests that safety strategies may need to be tailored for different vehicle types.</p>
                <p>&nbsp; &nbsp; 5) Severity variations: crash severity varies with factors like time of day and location, understanding these variations can help emergency services prepare for potential severe crashes.</p>
            </div>
            
            <p>Based on the insights gained from the analysis, here are some recommendations for improving road safety in New York City:</p>
            
            <div class="highlight-box">
                <p>&nbsp; &nbsp; 1) Targeted interventions:&nbsp;focus safety measures on identified hotspots and during peak crash times. This could include increased traffic enforcement or improved signage and road design in these areas and times.</p>
                <p>&nbsp; &nbsp; 2) Education campaigns:&nbsp;develop targeted education campaigns addressing the most common contributing factors. These campaigns should be tailored to different road user groups (drivers, cyclists, pedestrians) and vehicle types.</p>
                <p>&nbsp; &nbsp; 3) Vehicle-specific measures:&nbsp;implement safety measures specific to vehicle types associated with higher crash rates or severities. This could include stricter licensing requirements or additional safety features.</p>
                <p>&nbsp; &nbsp; 4) Time-based strategies: adjust traffic management strategies based on the time of day, day of week, and seasonal patterns identified. This could involve dynamic speed limits or lane allocations.</p>
                <p>&nbsp; &nbsp; 5) Data-driven policy:&nbsp;use the insights from this analysis to inform policy decisions. Regular updates to this analysis can help track the effectiveness of implemented measures over time.</p>
                <p>&nbsp; &nbsp; 6) Emergency response optimization: use the severity analysis to optimize the allocation of emergency response resources, ensuring faster response times for potentially severe crashes.</p>
                <p>&nbsp; &nbsp; 7) Fresh research: conduct more in-depth studies on the specific factors contributing to crashes in high-risk areas or involving high-risk vehicle types.</p>
            </div>
            
            <p>By implementing these recommendations and continuing to analyze crash data, we can work towards significantly reducing the frequency and severity of motor vehicle collisions, ultimately saving lives and improving road safety for all users.</p>
        </div>
    </div>
</body>
</html>
  `
};