export default {
  id: "project-1",
  title: "Unlocking Insights in Healthcare",
  image: "/images/healthcare.png",
  description: "Engineered a healthcare decision-making system by building a predictive analytics system that achieved 97% accuracy in patient risk assessment and uncovered $20,000+ cost-saving opportunities through advanced clustering and ML modeling. Transformed raw patient data into an interactive dashboard for real-time monitoring of critical healthcare metrics.",
  technologies: ["SQL", "Python", "Data Analysis", "Data Science"],
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
        
        /* Container Styles */
        .analysis-container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        /* Text Content */
        .text-content {
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        /* Links */
        .link-style {
            color: #0066cc;
            text-decoration: none;
        }
        .link-style:hover {
            text-decoration: underline;
        }
        
        /* Headers */
        .section-header {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin: 30px 0 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eee;
        }
        
        /* Tables */
        .table-container {
            margin: 20px 0;
        }
        .table-title {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin: 15px 0 10px;
        }
        .table-description {
            font-size: 14px;
            color: #666;
            margin: 5px 0 15px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        th {
            background-color: #f4f4f4;
            padding: 12px 15px;
            text-align: left;
            font-weight: bold;
            color: #333;
            border-bottom: 2px solid #ddd;
        }
        td {
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
        }
        .boolean-value {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 14px;
        }
        .true-value {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        .false-value {
            background-color: #ffebee;
            color: #c62828;
        }
        
        /* Visualizations */
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
            width: 100%;
            max-width: 480px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        .visualization-description {
            font-size: 14px;
            color: #666;
            margin: 15px 0;
            text-align: center;
            padding: 0 20px;
        }
        
        /* Clustering Specific */
        .clustering-container {
            margin: 20px 0;
        }
        .clustering-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            margin: 20px 0;
        }
        
        /* Dashboard Specific */
        .dashboard {
            margin: 20px 0;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .metric-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Feature Charts */
        .chart-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .feature-bar {
            height: 30px;
            background: #e0e0e0;
            margin-bottom: 10px;
            border-radius: 4px;
            overflow: hidden;
        }
        .feature-fill {
            height: 100%;
            background: #0088FE;
            display: flex;
            align-items: center;
            padding: 0 10px;
            color: white;
        }
        .feature-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="analysis-container">
        <p>Datasets and code can be found <a href="https://github.com/olehsekirkin/unlocking-insights-in-healthcare" class="link-style">here</a>.</p>
        
        <div class="text-content">
            <p>In the rapidly evolving landscape of healthcare, leveraging data to drive informed decisions is no longer a luxury but a necessity. My latest project delves deep into the realm of healthcare analytics, harnessing the power of SQL databases and Python to uncover actionable insights.</p>
            
            <p>This endeavor encompasses meticulous data preparation, patient segmentation through clustering algorithms, robust predictive modeling to forecast hospitalization charges and assess patient risk scores, geospatial analysis to visualize healthcare metrics across regions, and the development of an interactive dashboard for real-time monitoring. Here's a comprehensive overview of the journey and the methodologies employed.</p>
            
            <p>&nbsp; &nbsp; 1. Data Architecture: Laying the Foundation<br />&nbsp; &nbsp; 2. Data Preparation: Cleaning and Structuring SQL Integration<br />&nbsp; &nbsp; 3. Patient Segmentation: Unveiling Clusters<br />&nbsp; &nbsp; 4. Predictive Modeling: Forecasting Charges and Assessing Risks<br />&nbsp; &nbsp; 5. Geospatial Analysis: Mapping Metrics Across States<br />&nbsp; &nbsp; 6. Cost Analysis: Unveiling Financial Insights<br />&nbsp; &nbsp; 7. Chronic Disease Management: Predicting Complications<br />&nbsp; &nbsp; 8. Dashboard development: Real-time Monitoring with Streamlit<br />&nbsp; &nbsp; 9. Scripts: Structuring and Querying the Data<br />&nbsp; &nbsp; 10. Conclusion</p>
        </div>
<!-- Data Architecture Section -->
        <div class="section-header">1. Data Architecture: Laying the Foundation</div>
        
        <div class="text-content">
            <p>At the heart of any data-driven project lies a well-structured database. Our healthcare dataset is organized within the&nbsp;<code>healthcare_data</code>&nbsp;schema, comprising three pivotal tables:</p>
        </div>

        <div class="table-container">
            <div class="table-title">Medical Examination Data</div>
            <div class="table-description">Patient health metrics and medical history information</div>
            <table>
                <thead>
                    <tr>
                        <th>Customer_ID</th>
                        <th>Customer_BMI</th>
                        <th>HBA1C</th>
                        <th>Heart_Issues</th>
                        <th>Any_Transplants</th>
                        <th>Cancer_history</th>
                        <th>NumberOfMajorSurgeries</th>
                        <th>smoker</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>47.41</td>
                        <td>7.47</td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td>0</td>
                        <td><span class="boolean-value true-value">yes</span></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>30.36</td>
                        <td>5.77</td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td>0</td>
                        <td><span class="boolean-value true-value">yes</span></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>34.485</td>
                        <td>11.87</td>
                        <td><span class="boolean-value true-value">yes</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td><span class="boolean-value false-value">No</span></td>
                        <td>2</td>
                        <td><span class="boolean-value true-value">yes</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="table-title">Hospitalization Details</div>
            <div class="table-description">Patient hospitalization records and associated costs</div>
            <table>
                <thead>
                    <tr>
                        <th>Customer_ID</th>
                        <th>date</th>
                        <th>children</th>
                        <th>charges</th>
                        <th>Hospital_tier</th>
                        <th>City_tier</th>
                        <th>State_ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2335</td>
                        <td>07-09-92</td>
                        <td>0</td>
                        <td>$563.84</td>
                        <td>2</td>
                        <td>3</td>
                        <td>R1013</td>
                    </tr>
                    <tr>
                        <td>2334</td>
                        <td>07-09-92</td>
                        <td>0</td>
                        <td>$570.62</td>
                        <td>2</td>
                        <td>1</td>
                        <td>R1013</td>
                    </tr>
                    <tr>
                        <td>2333</td>
                        <td>06/30/1992</td>
                        <td>0</td>
                        <td>$600.00</td>
                        <td>2</td>
                        <td>1</td>
                        <td>R1013</td>
                    </tr>
                </tbody>
            </table>

            <div class="table-title">Patient Information</div>
            <div class="table-description">Basic patient identification data</div>
            <table>
                <thead>
                    <tr>
                        <th>Customer_ID</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hawks, Ms. Kelly</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lehner, Mr. Matthew D</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lu, Mr. Phil</td>
                    </tr>
                </tbody>
            </table>
        </div>
<!-- Data Preparation Section -->
        <div class="section-header">2. Data Preparation: Cleaning and Structuring SQL Integration</div>
        
        <div class="text-content">
            <p>Before diving into any analysis, it's imperative to ensure the data's integrity and consistency. The <em>preparedataforSQL.py</em> script is meticulously crafted to cleanse and preprocess the raw data, making it SQL-ready. Here's a breakdown of its functionalities:</p>
            
            <p>&nbsp; &nbsp; - Processing hospitalization_details.csv: entries with invalid or missing dates are removed, then converts textual month representations (January, February) to numerical values, and restructures the date into a standarized time, following a mm/dd/yyyy format. 'ID' prefix is striped from Customer_ID and we ensure it's an integer. Numerical values are also striped from Hospital_tier and City_tier.<br />&nbsp; &nbsp; - Processing Medical_Examinatios.csv: ID normalization once again, transforms textual description of major surgeries into numerical counts.<br />&nbsp; &nbsp; - Processing Names.xlsx: we ensure consistency across datasets here.</p>
            
            <p>This complete cleaning ensures that the data fed into our analytical model is both accurate and reliable.</p>
        </div>

        <!-- Patient Segmentation Section -->
        <div class="section-header">3. Patient Segmentation: Unveiling Clusters</div>
        
        <div class="text-content">
            <p>Understanding patient segments is crucial for personalized healthcare strategies, and the <em>patientsegmentation.py</em> script employs k-means clustering algorithm to identify distinct patient groups based on various health metrics and demographic factors.</p>
            
            <p>How so? First we have to connect to the healthcare_data, during this project I made use of MySQL database. Then features are selected: age, children, charges, hospital_tier, city_tier, BMI, HBA1C, heart_issues, any_transplants, cancer_history, numberofmajorsurgeries and smoker.</p>
            
            <p>The data is standarized and features are scaled using StandardScaler to ensure uniformity across all of them. And for optimal cluster determination, we employ the Elbow Method (<em>helps find the optimal number of clusters (k) in k-means clustering by plotting the sum of squared distances (inertia) against different k values</em>) to ascertain the ideal number of clusters, visualized through an inertia plot. With the chosen number of clusters (k=4) we execute it, and project the high-dimensional data into two principal components using PCA for intuitive visualization.</p>
        </div>

        <div class="clustering-container">
            <div class="visualization-card">
                <div class="visualization-title">Elbow Method for Optimal Cluster Selection</div>
                <img class="visualization-image" src="https://i.ibb.co/qFzyLvW/figure-1-1.webp" alt="Elbow Method Plot" />
                <div class="visualization-description">The plot of inertia versus the number of clusters depicts a clear elbow at around k=4, indicating that four clusters is the ideal number to segment the patients.</div>
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Patient Clusters Visualization</div>
                <img class="visualization-image" src="https://i.ibb.co/3cN14Xr/figure-2-1.png" alt="Cluster Visualization" />
                <div class="visualization-description">Visual representation of the four distinct clusters derived from our analysis. Each color represents a different cluster, and the two principal components (PC1 and PC2) are used to reduce the data's dimensions for easier visualization.</div>
            </div>
        </div>

        <div class="text-content">
            <p>The scatterplot reveals clear separation among the clusters, with some overlap between clusters 1, 2 and 3, suggesting shared characteristics among these groups, while cluster 0 stands distinctly apart. This visualization provides a high-level understanding of how the clusters are organized and the relationships between the patient groups.</p>
            
            <p>These clusters uncovered distinct patient profiles that align with specific health and demographic characteristics, next is a breakdown of them:</p>
            
            <p>&nbsp; &nbsp; - Cluster 0, 144 patients: youngest group with an average age of 20.81, least likely to have children with an average of 0.34, highest number of major surgeries at 1.13 average and no presence of cancer history.<br />&nbsp; &nbsp; Smallest group but their profile stands out due to their high surgery rate despite their young age. They may benefit from additional monitoring or pre-surgery interventions to improve outcomes.<br />&nbsp; &nbsp; - Cluster 1, 805 patients: oldest group with an average age of 54.11, moderate presence of children with an average of 0.65, relatively low surgeries at 0.90 on average, cancer history is presence but low, at 2.36%.<br />&nbsp; &nbsp; Second largest group, representing an older demographic but with stable health. Might need targeted chronic care management ato prevent further complications.<br />&nbsp; &nbsp; - Cluster 2, 372 patients: middle-aged group, with an average age of 36.62, higher than average children at 0.97 and average surgery rate at 1.0 per person. 100% of patients have a cancer history.<br />&nbsp; &nbsp; Small cluster, all of whom have a cancer history, which can be prioritized for ongoing treatment and care coordination.<br />&nbsp; &nbsp; - Cluster 3, 1008 patients: average age similar to the cluster above, at 34.49. Highest children average at 1.44 and fewest surgeries, at 0.32 per patient. No significant presence of cancer or smokers in this group.<br />&nbsp; &nbsp; Largest group, reflecting a more typical, low-complication patient group, requiring fewer medical interventions. This group can be managed with preventive strategies to keep their health stable and reduce the likelihood of future complications.</p>
        </div>
<!-- Predictive Modeling Section -->
        <div class="section-header">4. Predictive Modeling: Forecasting Charges and Assessing Risks</div>
        
        <div class="text-content">
            <p>The <em>predictionmodeling.py</em> script takes a deep dive into predictive analytics, focusing on two primary objectives: 1) predicting hospitalization charges, and 2) creating risk scores for patient complications.</p>
            
            <p>Both tasks are essential in modern healthcare systems, as they help optimize financial planning and identifying hih-risk patients to deliver targeted, personalized care.</p>
            
            <p>Accurate forecasting of hospitalization charges is crucial for effective financial management and planning, it enables hospitals and healthcare providers to anticipate costs and optimize resource allocation, ensuring efficing healthcare delivery.</p>
            
            <p>The data was extracted from the hospitalization_details and medical_examination tables, combining a rich set of features including patient demographics, health metrics and hospitalization details. Then the features were selected (same as previously) and a Gradient Boosting Regressor was utilized due to its ability to handle complex interactions between features. It is particularly suited for capturing non-linear relationships in healthcare costs. A grid search was conducted with cross-validation to fine-tune hyperparameters such as learning rate, max depth and the number of estimators.</p>
            
            <p>For evaluation, the model's performance was evaluated using the Mean Squared Error (MSE) and R² score to measure its predictive accuracy. Feature importance were visualized to understand which factors had the most significant impact on hospitalization charges.</p>
            
            <p>The model's SME was 77,051,054.69 which indicates the average squared difference between predicted and actual charges.</p>
            
            <p>The model achieved an R² score of 0.43, meaning that 43% of the variance in hospitalization charges can be explained by the model. While the score reflects a reasonable predictive capacity, it also suggests there are additional factors influencing charges that were not captured currently.</p>
            
            <p>The top 3 most influential features driving hospitalization charges were: 1) hospital tier (57%), 2) BMI (22%) and 3) age (18%).</p>
        </div>

<div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
<p><strong>Model Results Dashboard</strong></p>
<!DOCTYPE html>
<html>
<head>
    <style>
        .dashboard {
            max-width: 1200px;
            margin: 0 auto;
            font-family: system-ui, -apple-system, sans-serif;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .metric-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .metric-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }
        .metric-value {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
        .chart-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        .chart-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #333;
        }
        .feature-bar {
            height: 30px;
            background: #e0e0e0;
            margin-bottom: 10px;
            border-radius: 4px;
            overflow: hidden;
        }
        .feature-fill {
            height: 100%;
            background: #0088FE;
            display: flex;
            align-items: center;
            padding: 0 10px;
            color: white;
        }
        .feature-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            font-size: 14px;
        }
        .parameters-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .parameter-item {
            background: #f8f8f8;
            padding: 10px;
            border-radius: 4px;
        }
        .parameter-label {
            font-size: 14px;
            color: #666;
            margin-bottom: 4px;
        }
        .parameter-value {
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <!-- Metrics Cards -->
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-title">Mean Squared Error</div>
                <div class="metric-value">77,051,054.69</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">R² Score</div>
                <div class="metric-value">43%</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Risk Model Accuracy</div>
                <div class="metric-value">97%</div>
            </div>
        </div>

        <!-- Feature Importance Chart -->
        <div class="chart-container">
            <div class="chart-title">Feature Importance in Hospitalization Charges</div>
            <div class="feature-label">
                <span>Hospital Tier</span>
                <span>57%</span>
            </div>
            <div class="feature-bar">
                <div class="feature-fill" style="width: 57%">57%</div>
            </div>
            
            <div class="feature-label">
                <span>BMI</span>
                <span>22%</span>
            </div>
            <div class="feature-bar">
                <div class="feature-fill" style="width: 22%">22%</div>
            </div>
            
            <div class="feature-label">
                <span>Age</span>
                <span>18%</span>
            </div>
            <div class="feature-bar">
                <div class="feature-fill" style="width: 18%">18%</div>
            </div>
            
            <div class="feature-label">
                <span>Other</span>
                <span>3%</span>
            </div>
            <div class="feature-bar">
                <div class="feature-fill" style="width: 3%">3%</div>
            </div>
        </div>

        <!-- Hyperparameters -->
        <div class="chart-container">
            <div class="chart-title">Model Hyperparameters</div>
            <div class="parameters-grid">
                <div class="parameter-item">
                    <div class="parameter-label">Learning Rate</div>
                    <div class="parameter-value">0.05</div>
                </div>
                <div class="parameter-item">
                    <div class="parameter-label">Max Depth</div>
                    <div class="parameter-value">3</div>
                </div>
                <div class="parameter-item">
                    <div class="parameter-label">Min Samples Leaf</div>
                    <div class="parameter-value">4</div>
                </div>
                <div class="parameter-item">
                    <div class="parameter-label">Min Samples Split</div>
                    <div class="parameter-value">10</div>
                </div>
                <div class="parameter-item">
                    <div class="parameter-label">N Estimators</div>
                    <div class="parameter-value">100</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
</div>
        
        <!-- Risk Assessment Section -->
        <div class="text-content">
            <p>Now, for the risk scores for patient complications. Identifying patients at high risk of developing complications is critical for proactive healthcare management. By predicting which patients are more likely to experience severe health issues, healthcare provides can prioritie interventions, reduce complications, and potentially lower overall costs.</p>
            
            <p>Complications, for the model, were defined primarly by the presence of heart issues or any transplants, as these conditions typically indicate a higher likelihood of severe health outcomes. Gradient Boosting Classifier was used to predict the likelihood of complications, with Grid Search for cross-validation to optimize hyperparameters.</p>
            
            <p>The model was this time evaluated using a classification report that measured key metrics such as precision, recall and F-1 score. The ROC AUC score was also calculated to measure the model's ability to discriminate between high-risk and low-risk patients, which were classified into: low risk, moderate risk and high risk.</p>
            
            <p>The model performed exceptionally well, achieving high precision and recall for both risk groups, with an overally accuracy of 97%.</p>
        </div>

<div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
<p><strong>Risk Assessment Model Dashboard</strong></p>
<!DOCTYPE html>
<html>
<head>
    <style>
        .risk-dashboard {
            max-width: 1200px;
            margin: 0 auto;
            font-family: system-ui, -apple-system, sans-serif;
        }
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .metric-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .metric-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }
        .metric-value {
            font-size: 24px;
            font-weight: bold;
            color: #333;
        }
        .risk-levels {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .risk-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }
        .risk-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 4px;
        }
        .risk-low {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        .risk-moderate {
            background-color: #fff3e0;
            color: #f57c00;
        }
        .risk-high {
            background-color: #ffebee;
            color: #c62828;
        }
        .parameters-grid {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .parameters-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }
        .parameter-item {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .parameter-label {
            color: #666;
        }
        .parameter-value {
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="risk-dashboard">
        <!-- Performance Metrics -->
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-title">Model Accuracy</div>
                <div class="metric-value">97%</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">ROC AUC Score</div>
                <div class="metric-value">0.85</div>
            </div>
            <div class="metric-card">
                <div class="metric-title">Risk Groups</div>
                <div class="metric-value">3</div>
            </div>
        </div>

        <!-- Risk Levels -->
        <div class="risk-levels">
            <div class="risk-title">Patient Risk Classification</div>
            <div class="risk-item risk-low">
                <strong>Low Risk:</strong>&nbsp;Regular monitoring, preventive care
            </div>
            <div class="risk-item risk-moderate">
                <strong>Moderate Risk:</strong>&nbsp;Enhanced monitoring, early intervention
            </div>
            <div class="risk-item risk-high">
                <strong>High Risk:</strong>&nbsp;Intensive monitoring, immediate intervention
            </div>
        </div>

        <!-- Model Parameters -->
        <div class="parameters-grid">
            <div class="parameters-title">Optimal Model Hyperparameters</div>
            <div class="parameter-item">
                <span class="parameter-label">Learning Rate</span>
                <span class="parameter-value">0.1</span>
            </div>
            <div class="parameter-item">
                <span class="parameter-label">Max Depth</span>
                <span class="parameter-value">7</span>
            </div>
            <div class="parameter-item">
                <span class="parameter-label">Min Samples Leaf</span>
                <span class="parameter-value">4</span>
            </div>
            <div class="parameter-item">
                <span class="parameter-label">Min Samples Split</span>
                <span class="parameter-value">10</span>
            </div>
            <div class="parameter-item">
                <span class="parameter-label">N Estimators</span>
                <span class="parameter-value">100</span>
            </div>
        </div>
    </div>
</body>
</html>
</div>

        <div class="text-content">
            <p>The ability to predict hospitalization costs and assess patient risk based on complications offers powerful tools for both operational efficiency and patient care. These insights can inform financial planning, resource allocation, and help healthcare providers deliver more personalized care to patients, ultimately improving outcomes and reducing costs.</p>
        </div>
<!-- Geospatial Analysis Section -->
        <div class="section-header">5. Geospatial Analysis: Mapping Healthcare Metrics Across States</div>
        
        <div class="text-content">
            <p>The geospatial analysis reveals regional disparities in healthcare charges and patient health metrics. Such insights are instrumental in identifying areas that require targeted interventions, optimizing resource distribution, and formulating region-specific healthcare policies.</p>
        </div>
        
        <div class="visualization-card">
            <div class="visualization-title">Regional Healthcare Metrics Distribution</div>
            <img class="visualization-image" src="https://i.ibb.co/qDp3gVz/ezgif-4-fc9927481d.gif" alt="Geospatial Analysis Animation" style="width: 600px; height: 338px;" />
            <div class="visualization-description">Interactive visualization showing the distribution of healthcare metrics across different states, highlighting regional patterns and disparities</div>
        </div>

        <!-- Cost Analysis Section -->
        <div class="section-header">6. Cost Analysis: Unveiling Financial Insights</div>
        
        <div class="text-content">
            <p>Effective cost management is crucial for the sustainability of healthcare institutions. The <em>costanalysis.py</em> script conducts an in-depth analysis of hospitalization charges, exploring their distribution, influencing factors, and interrelationships with other health metrics.</p>
            
            <p>Data was loaded from cost_analysis_view, a dataset that includes patient demographics health metrics, and hospitalization charges.</p>
            
            <div class="text-content">
                <p>With just a quick EDA (Exploratory Data Analysis) we can gather a lot of information already:</p>
                
                <p>&nbsp; &nbsp; 1) Distribution of Charges: as visualized in the histogram, the distribution of hospitalization charges is righ-skewed, with most patients incurring charges below $20,000, while a few cases exceed $50,000. This skew suggests that while most hospitalizations remain moderately priced, outliers drive up the average.</p>
                
                <p>&nbsp; &nbsp; 2) Charges vs. Age: a scatterplot shows a general upward trend in hospitalization charges as patient age increases. Although the relationship between age and charges is not strictly linear, older patients tend to face higher costs, potentially due to the complexity of care required.</p>
                
                <p>&nbsp; &nbsp; 3) Charges by Hospital Tier: a boxplot reveals significant differences in charges across hospital tiers. Tier 1 hospitals, often the most advanced or specialized, show the highest median charges, with a wider range of costs compared to Tier 2 and Tier 3 hospitals. This suggests that hospital tier is a key determinant of the financial burden.</p>
                
                <p>&nbsp; &nbsp; 4) Correlation Matrix: a heatmap visualizes the correlations between key variables. Charges are strongly negatively correlated with hospital_tier, meaning that higher-tier hospitals (with lower numerical values for tier) are associated with higher costs.</p>
            </div>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">Distribution of Charges</div>
                <img class="visualization-image" src="https://i.ibb.co/QM0STYR/part61.webp" alt="Distribution of Charges Histogram" />
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Charges vs. Age Relationship</div>
                <img class="visualization-image" src="https://i.ibb.co/NZYpxSb/part63.webp" alt="Charges vs Age Scatterplot" />
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Correlation Matrix Heatmap</div>
                <img class="visualization-image" src="https://i.ibb.co/VmqSZ85/part64.webp" alt="Correlation Matrix Heatmap" />
            </div>
        </div>

        <div class="text-content">
            <p>This cost analysis provides actionable insights for healthcare administrators to refine budgeting and resource allocation strategies. By focusing on high-cost areas, such as patients with elevated BMI or older age groups, healthcare providers can design interventions that reduce costs while maintaining quality care.</p>
            
            <p>The Ordinary Least Squares (OLS) regression was employed to quantify the impact of various factors on hospitalization charges. The OLS regression model achieved an Adjusted R-squared of 0.411, indicating that the model explains about 41.1% of the variability in hospitalization charges. Although there is room for improvement, this provides valuable insights into key cost drivers.</p>
            
            <p>Significant predictors as age (older patients, higher costs, about $310 per year of age), also having more children correlates with a slight increase in charges, hospital tier, as expected, where higher tier hospitals are associated with significantly higher charges. Also higher BMI is a significant predictor, with an average of $380 increase per unit increase in BMI.</p>
            
            <p>The VIF calculations reveal no severe multicollinearity among the predictors, as all VIF values were below 5, except for the constant. This suggests the model is stable and that the predictors are not highly redundant.</p>
            
            <p>This cost analysis provides actionable insights for healthcare administrators to refine budgeting and resource allocation strategies. By focusing on high-cost areas, such as patients with elevated BMI or older age groups, healthcare providers can design interventions that reduce costs while maintaining quality care.</p>
        </div>
<!-- Chronic Disease Management Section -->
        <div class="section-header">7. Chronic Disease Management: Predicting Complications</div>
        
        <div class="text-content">
            <p>Managing chronic diseases effectively is critical for improving patient outcomes while reducing healthcare costs. The <em>chronicdisease.py</em> script leverages machine learning techniques to predict complications in patients with chronic conditions, stratifying risk levels based on various health factors.</p>
            
            <p>Categorical variables were one-hot encoded where necessary, ensuring that the machine learning algorithms could appropriately interpret the data.</p>
            
            <p>The Gradient Boosting Classifier was chosen for its strong ability to handle imbalanced datasets and provide high predictive accuracy. The classifier was wrapped in a pipeline to streamline preprocessing, scaling numerical features, and encoding categorical ones.</p>
            
            <p>A Grid Search with cross-validation was conducted to fine-tune the hyperparameters, optimizing the classifier's performance.</p>
        </div>

        <div class="visualizations-grid">
            <div class="visualization-card">
                <div class="visualization-title">Model Performance Metrics</div>
                <img class="visualization-image" src="https://i.ibb.co/yNBq3GV/part71.png" alt="Model Performance Metrics" />
                <div class="visualization-description">Evaluation metrics including Precision, Recall, and F1-Score showing the model's strong discriminative ability with ROC AUC score of 0.85</div>
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">ROC Curve Analysis</div>
                <img class="visualization-image" src="https://i.ibb.co/RNpm5S8/part72.png" alt="ROC Curve" />
                <div class="visualization-description">ROC curve demonstrating the model's excellent predictive power across different classification thresholds</div>
            </div>
            
            <div class="visualization-card">
                <div class="visualization-title">Top 10 Predictive Features</div>
                <img class="visualization-image" src="https://i.ibb.co/b5Yb08Z/part73.png" alt="Feature Importance" />
                <div class="visualization-description">Feature importance analysis highlighting HBA1C and Number of Major Surgeries as the most significant predictors for complications</div>
            </div>
        </div>

        <!-- Dashboard Development Section -->
        <div class="section-header">8. Dashboard development: Real-time Monitoring with Streamlit</div>
        
        <div class="text-content">
            <p>To facilitate real-time monitoring and interactive exploration of healthcare data, an intuitive dashboard was developed using Streamlit. The <em>app.py</em> script orchestrates various data visualizations and functionalities, providing stakeholders with a comprehensive overview of patient metrics, facility utilization, and financial insights.</p>
            
            <p>The dashboard serves as a centralized hub for monitoring healthcare operations, enabling data-driven decision-making. Its interactive nature allows users to drill down into specific metrics, fostering a deeper understanding of underlying patterns and trends.</p>
        </div>
        
        <div class="visualization-card">
            <div class="visualization-title">Interactive Healthcare Analytics Dashboard</div>
            <img class="visualization-image" src="https://i.ibb.co/P99QYWW/ezgif-4-97d17fb57b-1.gif" alt="Dashboard Demo" style="width: 600px; height: 338px;" />
            <div class="visualization-description">Real-time interactive dashboard built with Streamlit, showcasing key healthcare metrics, patient data, and financial insights</div>
        </div>

        <!-- Scripts and Conclusion Section -->
        <div class="section-header">9. Scripts: structuring and querying the data</div>
        <div class="text-content">
            <p>Scripts can be found at <a href="https://github.com/olehsekirkin/unlocking-insights-in-healthcare" class="link-style">my GitHub</a>, if you have any questions feel free to contact me on LinkedIn!</p>
        </div>

        <div class="section-header">10. Conclusion</div>
        <div class="text-content">
            <p>This project exemplifies the transformative potential of data analytics in healthcare. By integrating robust data preparation, advanced machine learning techniques, and interactive visualization tools, it provides a comprehensive framework for understanding and improving patient care, optimizing financial operations, and strategically planning healthcare services. As healthcare continues to evolve, such data-driven approaches will be instrumental in fostering a more efficient, responsive, and patient-centric healthcare system.</p>
        </div>
    </div>
</body>
</html>
  `
};