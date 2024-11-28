export default {
    id: "project-6",
    title: "ETL Pipeline: front & backend",
    image: "/images/dataetl.jpg",
    description: "Built end-to-end automated ETL pipeline integrating Alpha Vantage API with BigQuery for real-time stock analysis. Orchestrated daily data workflows using Apache Airflow and created dynamic Power BI dashboards featuring 12+ key trading metrics, enabling instant market insights.",
    technologies: ["SQL", "Python", "Google BigQuery", "Apache Airflow"],
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
<p>&nbsp; &nbsp; 1. Extract, Transform, Load<br />&nbsp; &nbsp; 2. Aggregation and Analysis<br />&nbsp; &nbsp; 3. Automation with Apache Airflow<br />&nbsp; &nbsp; 4. Connect<br />&nbsp; &nbsp; 5. Automate</p>
<div class="section-header">1. Extract, Transform, Load</div>
<p>In today&rsquo;s data-driven world, the ability to extract, transform, and load (ETL) data efficiently is paramount for any organization looking to gain valuable insights. This article outlines the process I followed to build a robust ETL pipeline utilizing Alpha Vantage API for stock market data analysis, specifically focusing on the tickers $ASTS, $RKLB, and $NVDA (hopefully they go up).</p>
<p>At its core, an ETL pipeline is a systematic approach to handling data, allowing for the automation of data workflows. The process can be broken down into three primary stages:</p>
<p>1)&nbsp;Extract: The first step involves accessing external data sources, which, in this case, is the Alpha Vantage API. This API provides a wealth of financial data, including time series for various stock tickers. By using a Python script, I can easily make requests to the API and retrieve the necessary data in JSON format. The following code snippet illustrates how I initiate the API call and extract hourly data for a specific ticker (this also saves the .csv files in your Drive).</p>
<p>2)&nbsp;Transform:&nbsp;Once the data is extracted, it needs to be cleaned and structured for analysis. This involves converting the JSON response into a pandas Data Frame, renaming columns for clarity, and ensuring that the data types are appropriate for further analysis. The transformation step is crucial, as it sets the stage for meaningful insights to be draw from the data.</p>
<p>3)&nbsp;Load:&nbsp;The final step involves loading the transformed data into a data warehouse (there are many and is up to you which one to use; Amazon Redshift, Google BigQuery, Microsoft Azure, Snowflake). This allows for efficient querying and analysis using SQL. Once loaded, I can perform aggregations and analyses on the data to uncover trends and patterns that inform investment decisions. What I did here is connect BigQuery to my personal Drive, so it extracts the files from there and uploads the dataset I created earlier.</p>
<div class="section-header">2. Aggregation and Analysis</div>
<p>After successfully loading the extracted and transformed data into BigQuery, the next step involves performing various aggregations and transformations to derive meaningful insights. This section outlines several SQL queries that I applied to the stock market data, each designed to compute key metrics for analysis and decision-making.</p>
<p>&nbsp; &nbsp; - The&nbsp;Daily OHLC&nbsp;(Open, High, Low, Close) aggregation provides a comprehensive view of a stock&rsquo;s daily performance by summarizing the opening, high, low, and closing prices. This aggregation allows investors to analyze price movements over time. By capturing these key price points, I can evaluate how a stock performed during the trading day.</p>
<p>&nbsp; &nbsp; - Intraday Range:&nbsp;The intraday range measures the difference between the highest and lowest prices within each trading day, providing insights into daily volatility. This information is crucial for understanding the price fluctuations that can affect trading strategies.</p>
<p>&nbsp; &nbsp; - Close-to-Close Change:&nbsp;This analysis calculates the daily change in closing prices, which helps identify trends and momentum in stock performance. Understanding these changes can assist in making informed trading decisions.</p>
<p>&nbsp; &nbsp; - OHCL Average:<strong>&nbsp;</strong>Calculating the average of the open, high, low, and close prices provides a smoothed view of the stock&rsquo;s performance over the day. This metric can help identify trends that may not be apparent from daily price movements alone.</p>
<p>&nbsp; &nbsp; - Simple Moving Average (SMA):&nbsp;The SMA smooths out short-term price fluctuations by averaging the closing prices over a specified period, in this case, a 5-hour window. This helps in identifying the overall trend and reducing noise in the data.</p>
<p>&nbsp; &nbsp; - Volume-Weighted Average Price (VWAP):<strong>&nbsp;</strong>VWAP considers both price and volume, providing a more comprehensive view of a stock&rsquo;s performance during the trading session. This metric is particularly useful for traders looking to determine the average price paid for a stock over a specific period.</p>
<p>&nbsp; &nbsp; - Intraday Volatility:&nbsp;Calculating intraday volatility using the standard deviation of closing prices gives insights into the price fluctuations within each trading day, helping investors gauge the risk associated with a stock.</p>
<p>&nbsp; &nbsp; - Price Volatility (Close-to-Close):&nbsp;This query calculates the standard deviation of the closing prices to measure price volatility from one day to the next, which is critical for assessing the stock&rsquo;s overall price stability.</p>
<p>&nbsp; &nbsp; - Cumulative Volume:&nbsp;The cumulative volume tracks the total volume of shares traded over time, which can provide insights into buying or selling pressure in the market.</p>
<p>&nbsp; &nbsp; - Cumulative Price Change:&nbsp;This metric captures the total change in price over time, highlighting the stock&rsquo;s performance trajectory and potential trends.</p>
<p>&nbsp; &nbsp; - Relative Strength Index (RSI)<strong>:&nbsp;</strong>The RSI is a momentum oscillator that measures the speed and change of price movements. It ranges from 0 to 100 and is typically used to identify overbought or oversold conditions.</p>
<p>&nbsp; &nbsp; - Exponential Moving Average (EMA):<strong>&nbsp;</strong>The EMA gives more weight to recent prices, making it more responsive to new information compared to the SMA. This calculation helps traders identify trends more effectively.</p>
<p>These SQL queries represent the core transformations and analyses that power the ETL pipeline, enabling me to draw actionable insights from raw stock market data. By carefully selecting and applying these transformations, I&rsquo;ve managed to create a streamlined process for ongoing analyses and decision-making, ultimately informing my investment strategies.</p>
<div class="section-header">3. Automation with Apache Airflow</div>
<p>With the foundational ETL pipeline established, the next logical step is to automate the entire process to ensure continuous and timely data ingestion. Apache Airflow, a powerful open-source workflow management tool, is ideal for orchestrating such pipelines. In this section, I outline the process of integrating Airflow to fully automate the extraction, transformation, and loading (ETL) of stock market data.</p>
<p>To begin, it&rsquo;s essential to set up the Airflow environment. Apache Airflow operates as a series of interconnected tasks within a Directed Acyclic Graph (DAG), allowing for sophisticated control over data workflows. The setup process involves a few crucial steps:Installation and Initialization: Start by installing Airflow and initializing the Airflow metadata database. The following command installs Airflow and sets up the necessary tables and configurations that Airflow uses to manage DAGs, tasks, and users.</p>
<p>Once the database is initialized, start the Airflow web server. This web interface is pivotal for monitoring and managing your data pipelines.&nbsp;The scheduler is the backbone of Airflow, responsible for executing tasks based on the defined schedule in your DAG.</p>
<p>These steps ensure that your Airflow environment is up and running, providing the framework necessary to automate your ETL pipeline.</p>
<p>The heart of Airflow&rsquo;s power lies in its DAGs, which define the sequence and dependencies of tasks within your workflow. Below is the DAG that orchestrates the ETL process for ingesting stock data from the Alpha Vantage API, transforming it using Python, and loading it into Google BigQuery.</p>
<p>In this DAG, three core tasks are defined:</p>
<p>&nbsp; &nbsp; - extract_data:&nbsp;This task handles data extraction from the Alpha Vantage API. It utilizes Python to make API requests and retrieve the stock data in JSON format.<br />&nbsp; &nbsp; - transform_data:&nbsp;After extraction, the data is transformed into a pandas DataFrame, where necessary cleaning and formatting are performed. This step ensures that the data is in a usable state for analysis.<br />&nbsp; &nbsp; - load_data: Finally, the cleaned data is uploaded to Google BigQuery, where it can be queried and analyzed. This task completes the ETL process, making the data available for immediate use in dashboards and further analytics.</p>
<p>The DAG is configured to run daily, ensuring that the stock data is consistently updated with the latest information. The Airflow UI allows for easy monitoring and troubleshooting of the pipeline, providing detailed logs and status updates for each task. This automation not only saves time but also ensures data accuracy and consistency, crucial for reliable stock market analysis.</p>
<div class="section-header">4. Connect</div>
<p>With the backend of our ETL pipeline firmly established, the next step involves connecting the data stored in BigQuery to Power BI. This integration will allow us to visualize and analyze the data efficiently, leveraging Power BI&rsquo;s powerful dashboarding capabilities.</p>
<p>Connecting BigQuery to Power BI is a straightforward process, yet crucial for ensuring that our data remains accessible and up-to-date. Here&rsquo;s how I did it:</p>
<p>&nbsp; &nbsp; 1) Launching&nbsp;Power BI Desktop: The journey begins by opening Power BI Desktop. This is where the connection to BigQuery will be established and where all subsequent data analysis and visualization will take place.<br /><br />&nbsp; &nbsp; 2) Accessing<strong>&nbsp;</strong>Google BigQuery: Within Power BI, navigate to the &ldquo;Get Data&rdquo; option located on the Home tab. Power BI offers a variety of data sources, and for this project, we&rsquo;re specifically interested in Google BigQuery. Selecting this option initiates the connection process.<br /><br />&nbsp; &nbsp; 3) Authenticating&nbsp;with Google: Upon selecting BigQuery, you&rsquo;ll be prompted to sign in with your Google account. It&rsquo;s essential to use the account that has access to your BigQuery datasets. This step ensures that Power BI can retrieve the correct data for analysis.<br /><br />&nbsp; &nbsp; 4) Selecting the Dataset: After authentication, Power BI will display a list of available projects and datasets linked to your account. Here, you&rsquo;ll choose the specific datasets you want to work with. For this project, I selected the datasets that store the data processed in&nbsp;backend of the pipeline.<br /><br />&nbsp; &nbsp; 5) Loading&nbsp;Data into Power BI: Once the appropriate datasets are selected, the next step is to load them into Power BI. This is where the magic happens. Power BI takes the data from BigQuery and presents it in a format that&rsquo;s ready for visualization and analysis.<br /><br />&nbsp; &nbsp; 6) Automating&nbsp;Data Refresh: To ensure that the data in Power BI stays current, I configured an automated refresh schedule. By setting Power BI to refresh the data every day, I can be confident that the dashboards reflect the most up-to-date information from BigQuery.</p>
<p>By following these steps, I successfully connected BigQuery to Power BI, paving the way for robust data visualization and ongoing analysis. This connection not only streamlines the workflow but also ensures that the insights derived from the data are always based on the latest available information.</p>
<div class="section-header">5. Automate</div>
<p>With the connection between BigQuery and Power BI established, the final step is to automate the data ingestion process, ensuring our dashboards are always up-to-date.</p>
<p>&nbsp; &nbsp; 1) Set&nbsp;Up the Refresh Schedule: Begin by publishing your Power BI report to the Power BI service. Navigate to the dataset, select &ldquo;Scheduled Refresh,&rdquo; and choose a refresh frequency. I opted for a daily refresh to keep the data current every 24 hours.</p>
<p>&nbsp; &nbsp; 2) Configure&nbsp;Credentials: Ensure that your Google account credentials linked to BigQuery are correctly configured in the &ldquo;Data Source Credentials&rdquo; section. This allows Power BI to access the data without interruption.</p>
<p>&nbsp; &nbsp; 3) Monitor<strong>&nbsp;</strong>and Optimize: Power BI will now automatically refresh the data based on your schedule. Monitor the refresh logs for any issues and consider using incremental refresh to optimize performance as your data grows.</p>
<p>By automating the data ingestion, the pipeline ensures that the insights in Power BI are always based on the latest data, with minimal manual intervention required.</p>
    `
  };