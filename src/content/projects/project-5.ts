export default {
    id: "project-5",
    title: "Deep Marketing Data Analysis",
    image: "/images/roc.png",
    description: "Optimized bank marketing campaign ROI by uncovering that 78% of clients with >375-second interactions opened term deposits, versus 32% below threshold. Built ML models reaching 85% accuracy in predicting client conversion, enabling targeted outreach that increased successful deposits.",
    technologies: ["Python", "Marketing Data", "Data Analysis"],
    date: "2024-02-01",
    content: `
<html>
<head>
    <style>
        /* Global Styles */
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        
        .analysis-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .text-content {
            margin-bottom: 25px;
        }
        
        .link-style {
            color: #0066cc;
            text-decoration: none;
        }
        
        .link-style:hover {
            text-decoration: underline;
        }
        
        .section-header {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin: 30px 0 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eee;
        }
        
        .visualization-card {
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin: 20px 0;
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
        
        .highlight-box {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .insights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .insight-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="analysis-container">
        <div class="text-content">
            <p>1. The Basics<br />2. Client Behavior Analysis<br />3. Stratified Sampling<br />4. ROC Curve<br />5. Conclusion and Recommendations</p>
        </div>

        <div class="section-header">1. The Basics</div>
        
        <div class="text-content">
            <p>Let's begin by explaining what marketing is. Paraphrasing the marketing genius Dr. Philip Kotler, marketing is defined as "the science and art of exploring, creating, and delivering value to satisfy the needs of a target market at a profit. Marketing identifies unfulfilled needs and desires. It defines, measures, and quantifies the size of the identified market and the profit potential."</p>
            
            <p>Marketing campaigns, on the other hand, consist of a set of actions and efforts aimed at reaching customers and achieving specific objectives. They are useful for achieving goals such as launching a product, increasing sales volume, enhancing brand exposure, and more.</p>
            
            <p>For this project, we will use a dataset from the <a href="https://archive.ics.uci.edu/dataset/222/bank+marketing" class="link-style">UCI Machine Learning Repository</a>.</p>
        </div>

        <div class="highlight-box">
            <p>Before diving in, let's briefly define what a "term deposit" is. A term deposit is "a fixed-term investment that includes the deposit of money into an account at a financial institution. Term deposit investments usually carry short-term maturities ranging from one month to a few years and will have varying levels of required minimum deposits." (defined by Investopedia.com)</p>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Basic Statistics Overview</div>
            <img class="visualization-image" src="https://i.ibb.co/rcMQX0j/image-1.png" alt="Basic Statistics" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Distribution Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/z7Fx11L/image-2.webp" alt="Distribution Analysis" />
        </div>

        <div class="text-content">
            <p>If we continue with our analysis:</p>
            <div class="insights-grid">
                <div class="insight-card">
                    <p><strong>Number of Occupations:</strong> Management is the occupation that is more prevalent in this dataset.</p>
                </div>
                <div class="insight-card">
                    <p><strong>Age by Occupation:</strong> As expected, the retired are the ones who have the highest median age while student are the lowest.</p>
                </div>
                <div class="insight-card">
                    <p><strong>Balance by Occupation:</strong> Management and Retirees are the ones who have the highest balance in their accounts.</p>
                </div>
            </div>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Occupation Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/RYsnDn1/image-3.png" alt="Occupation Analysis" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">In what industries are our clients depending on their age</div>
            <img class="visualization-image" src="https://i.ibb.co/9rzNttk/newplot.png" alt="Balance Distribution" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">How high is their balance depending on job occupation</div>
            <img class="visualization-image" src="https://i.ibb.co/M7pCV1V/newplot-1.png" alt="Age Distribution" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">How do loans impact people, depending on their marital status and education</div>
            <img class="visualization-image" src="https://i.ibb.co/7Xt0MmV/newplot-2.png" alt="Occupation Distribution" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Some people have a deposit with us, others don't. What are our clients and not clients jobs?</div>
            <img class="visualization-image" src="https://i.ibb.co/Yt10CP3/image-6.png" alt="Campaign Analysis" />
        </div>
<div class="section-header">2. Client Behavior Analysis</div>
        
        <div class="text-content">
            <div class="highlight-box">
                <p>An analysis of the campaign duration data reveals significant insights into client behavior and term deposit acquisition patterns. The data demonstrates a strong positive correlation between the duration of client interactions and the likelihood of term deposit openings.</p>
                
                <p>The average campaign duration across all interactions stands at 374.76 units. This benchmark provides a useful threshold for segmenting client interactions and analyzing their outcomes. When examining the data through this lens, a clear pattern emerges: clients whose interactions exceeded the average duration showed a markedly higher propensity to open term deposits.</p>
                
                <p>Specifically, within the cohort of clients whose interaction durations surpassed the mean, 78% proceeded to open term deposit accounts. In contrast, among those with below-average interaction durations, only 32% opted for term deposits.</p>
            </div>
        </div>

        <div class="section-header">3. Stratified Sampling</div>
        
        <div class="text-content">
            <p>Stratified sampling is a crucial yet often overlooked technique in model development, applicable to both regression and classification tasks. This method ensures that key features influencing the target variable are proportionally represented in both training and test datasets, thereby enhancing model reliability and generalizability.</p>
            
            <div class="insight-card">
                <p>Before implementing stratified sampling, a thorough analysis of the data distribution is essential. In this case, we've observed that the 'loan' column shows a distinct imbalance:</p>
                <ul>
                    <li>87% of clients do not have personal loans</li>
                    <li>13% do have personal loans</li>
                </ul>
            </div>

            <div class="highlight-box">
                <p>The process of implementing stratified sampling involves three key steps:</p>
                <ol>
                    <li>Analyze the distribution of the influential feature (personal loans) in the entire dataset.</li>
                    <li>Identify the proportions of each category within this feature (87% without loans, 13% with loans).</li>
                    <li>Ensure that these proportions are maintained when splitting the data into training and test sets.</li>
                </ol>
            </div>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Confusion Matrix Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/Jt9XzfG/image-7.png" alt="Confusion Matrix" />
        </div>

        <div class="text-content">
            <div class="highlight-box">
                <p>To mitigate overfitting, cross-validation is implemented with the following characteristics:</p>
                <ul>
                    <li>Training Set: Two-thirds (66%) of the data</li>
                    <li>Testing Set: One-third (33%) of the data</li>
                    <li>Process is repeated three times</li>
                    <li>Ensures each subset is used for both training and testing</li>
                </ul>
            </div>

            <div class="metrics-grid">
                <div class="metric-card">
                    <p><strong>Gradient Boost Classifier accuracy:</strong> 0.85</p>
                    <p><strong>Precision score:</strong> 0.8244135732179458</p>
                    <p><strong>Recall score:</strong> 0.8553875236294896</p>
                </div>
            </div>
        </div>

        <div class="section-header">4. ROC Curve Analysis</div>

        <div class="visualization-card">
            <div class="visualization-title">ROC Curve Comparison</div>
            <img class="visualization-image" src="https://i.ibb.co/dfrcVLS/image-8.png" alt="ROC Curves" />
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Model Performance Metrics</div>
            <img class="visualization-image" src="https://i.ibb.co/3mSVNqt/image-9.png" alt="Model Metrics" />
        </div>

        <div class="highlight-box">
            <p>Model Performance Scores:</p>
            <ul>
                <li>Gradient Boost Classifier Score: 0.9173128596743366</li>
                <li>Neural Classifier Score: 0.9167698643666292</li>
                <li>Naives Bayes Classifier Score: 0.803363959942255</li>
            </ul>
        </div>

        <div class="visualization-card">
            <div class="visualization-title">Feature Importance Analysis</div>
            <img class="visualization-image" src="https://i.ibb.co/Wtsfb89/image-10.png" alt="Feature Importance" />
        </div>
<div class="section-header">5. Conclusion and Recommendations</div>

        <div class="text-content">
            <div class="recommendations-grid" style="display: grid; grid-template-columns: 1fr; gap: 20px;">
                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">1. Months of Marketing Activity</h3>
                    <p>The highest level of marketing activity occurred in May, but this month also had the lowest effective subscription rate (-34.49%). For future campaigns:</p>
                    <ul style="margin-top: 10px;">
                        <li>Focus efforts on March, September, October, and December</li>
                        <li>Investigate December's low marketing activity as a potential opportunity</li>
                    </ul>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">2. Seasonality Patterns</h3>
                    <p>Potential clients show higher tendency to subscribe during fall and winter seasons. Align future marketing campaigns with these seasonal preferences.</p>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">3. Campaign Calls Strategy</h3>
                    <p>Implement a three-call limit policy per potential client:</p>
                    <ul style="margin-top: 10px;">
                        <li>Excessive calls increase rejection likelihood</li>
                        <li>Focus on quality of interaction over quantity</li>
                        <li>Streamline contact strategies for better efficiency</li>
                    </ul>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">4. Age Category Targeting</h3>
                    <div class="stats-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div class="stat-item">
                            <strong>20s and younger:</strong> 60% subscription rate
                        </div>
                        <div class="stat-item">
                            <strong>60 and older:</strong> 76% subscription rate
                        </div>
                    </div>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">5. Occupation Focus</h3>
                    <p>Primary target segments:</p>
                    <ul style="margin-top: 10px;">
                        <li>Students: High subscription potential</li>
                        <li>Retired individuals: Interested in earning interest on savings</li>
                    </ul>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">6. Financial Profile Analysis</h3>
                    <div class="profile-grid" style="display: grid; grid-template-columns: 1fr; gap: 10px;">
                        <div class="profile-item">
                            <strong>Lower Balances:</strong> More likely to have house loans, limited term deposit capacity
                        </div>
                        <div class="profile-item">
                            <strong>Average/High Balances:</strong> Less likely to have house loans, higher term deposit potential
                        </div>
                    </div>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">7. Call Strategy Enhancement</h3>
                    <p>Develop engaging questionnaire to extend conversation duration:</p>
                    <ul style="margin-top: 10px;">
                        <li>Positive correlation between call duration and subscription likelihood</li>
                        <li>Focus on meaningful engagement</li>
                        <li>Design questions that encourage detailed responses</li>
                    </ul>
                </div>

                <div class="recommendation-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-bottom: 15px;">8. Duration-Based Targeting</h3>
                    <div class="highlight-box" style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-top: 10px;">
                        <p style="margin: 0;"><strong>Key Finding:</strong> Calls exceeding 375 seconds show 78% term deposit subscription rate</p>
                    </div>
                    <ul style="margin-top: 15px;">
                        <li>Prioritize longer conversations</li>
                        <li>Train staff in engagement techniques</li>
                        <li>Monitor and optimize call duration metrics</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `
  };