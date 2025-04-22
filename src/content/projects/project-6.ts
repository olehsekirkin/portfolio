export default {
    id: "project-6",
    title: "ETL Pipeline: front & backend",
    image: "/images/dataetl.jpg",
    description: "Built end-to-end automated ETL pipeline integrating Alpha Vantage API with BigQuery for real-time stock analysis. Orchestrated daily data workflows using Apache Airflow and created dynamic Power BI dashboards featuring 12+ key trading metrics, enabling instant market insights.",
    technologies: ["SQL", "Python", "Google BigQuery", "Apache Airflow"],
    date: "2024-02-01",
    content: `
<div class="analysis-container">
  <style>
    .analysis-container {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0 auto;
      max-width: 1200px;
      padding: 20px;
      background: #fff;
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
    .query-container {
      background: #1e1e1e;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      color: #d4d4d4;
      overflow-x: auto;
    }
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #333;
    }
    .description {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    pre {
      margin: 0;
      white-space: pre-wrap;
    }
    .keyword { color: #569cd6; }
    .function { color: #dcdcaa; }
    .string { color: #ce9178; }
    .number { color: #b5cea8; }
    .connection-flow {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin: 30px 0;
    }
    .step-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .dashboard-preview {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-top: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 20px;
    }
    .metric-card {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 15px;
    }
    svg {
      max-width: 100%;
      height: auto;
    }
  </style>
<p>&nbsp; &nbsp; 1. Extract, Transform, Load<br />&nbsp; &nbsp; 2. Aggregation and Analysis<br />&nbsp; &nbsp; 3. Automation with Apache Airflow<br />&nbsp; &nbsp; 4. Connect<br />&nbsp; &nbsp; 5. Automate</p>
<div class="section-header">1. Extract, Transform, Load</div>
<p>In today&rsquo;s data-driven world, the ability to extract, transform, and load (ETL) data efficiently is paramount for any organization looking to gain valuable insights. This article outlines the process I followed to build a robust ETL pipeline utilizing Alpha Vantage API for stock market data analysis, specifically focusing on the tickers $ASTS, $RKLB, and $NVDA (hopefully they go up).</p>
<p>At its core, an ETL pipeline is a systematic approach to handling data, allowing for the automation of data workflows. The process can be broken down into three primary stages:</p>
<p>1)&nbsp;Extract: The first step involves accessing external data sources, which, in this case, is the Alpha Vantage API. This API provides a wealth of financial data, including time series for various stock tickers. By using a Python script, I can easily make requests to the API and retrieve the necessary data in JSON format. The following code snippet illustrates how I initiate the API call and extract hourly data for a specific ticker (this also saves the .csv files in your Drive).</p>
<p>2)&nbsp;Transform:&nbsp;Once the data is extracted, it needs to be cleaned and structured for analysis. This involves converting the JSON response into a pandas Data Frame, renaming columns for clarity, and ensuring that the data types are appropriate for further analysis. The transformation step is crucial, as it sets the stage for meaningful insights to be draw from the data.</p>
<p>3)&nbsp;Load:&nbsp;The final step involves loading the transformed data into a data warehouse (there are many and is up to you which one to use; Amazon Redshift, Google BigQuery, Microsoft Azure, Snowflake). This allows for efficient querying and analysis using SQL. Once loaded, I can perform aggregations and analyses on the data to uncover trends and patterns that inform investment decisions. What I did here is connect BigQuery to my personal Drive, so it extracts the files from there and uploads the dataset I created earlier.</p>
<div class="section-header">2. Aggregation and Analysis</div>
<p>After successfully loading the extracted and transformed data into BigQuery, the next step involves performing various aggregations and transformations to derive meaningful insights. This section outlines several SQL queries that I applied to the stock market data, each designed to compute key metrics for analysis and decision-making.</p>

    <!-- Daily OHLC -->
    <div class="section-title">Daily OHLC (Open, High, Low, Close)</div>
    <div class="description">
        Provides a comprehensive view of a stock's daily performance by summarizing the opening, high, low, and closing prices.
    </div>
    <div class="query-container">
        <pre><span class="keyword">WITH</span> daily_data <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        <span class="function">DATE</span>(TIMESTAMP_FIELD_0) <span class="keyword">AS</span> date,
        open,
        high,
        low,
        close,
        volume,
        <span class="function">FIRST_VALUE</span>(open) <span class="keyword">OVER</span> (<span class="keyword">PARTITION BY</span> <span class="function">DATE</span>(TIMESTAMP_FIELD_0) <span class="keyword">ORDER BY</span> TIMESTAMP_FIELD_0) <span class="keyword">AS</span> daily_open,
        <span class="function">LAST_VALUE</span>(close) <span class="keyword">OVER</span> (<span class="keyword">PARTITION BY</span> <span class="function">DATE</span>(TIMESTAMP_FIELD_0) <span class="keyword">ORDER BY</span> TIMESTAMP_FIELD_0 <span class="keyword">ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</span>) <span class="keyword">AS</span> daily_close
    <span class="keyword">FROM</span>
        'portfolio-etl-pipeline.stocks_data.stock_NVDA'
)
<span class="keyword">SELECT</span>
    date,
    <span class="function">MAX</span>(daily_open) <span class="keyword">AS</span> daily_open,
    <span class="function">MAX</span>(high) <span class="keyword">AS</span> daily_high,
    <span class="function">MIN</span>(low) <span class="keyword">AS</span> daily_low,
    <span class="function">MAX</span>(daily_close) <span class="keyword">AS</span> daily_close,
    <span class="function">SUM</span>(volume) <span class="keyword">AS</span> daily_volume
<span class="keyword">FROM</span>
    daily_data
<span class="keyword">GROUP BY</span>
    date
<span class="keyword">ORDER BY</span>
    date;</pre>
    </div>

    <!-- Intraday Range -->
    <div class="section-title">Intraday Range</div>
    <div class="description">
        Measures the difference between the highest and lowest prices within each trading day, providing insights into daily volatility.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">AS</span> date,
    <span class="function">MAX</span>(high) - <span class="function">MIN</span>(low) <span class="keyword">AS</span> intraday_range
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">GROUP BY</span>
    date
<span class="keyword">ORDER BY</span>
    date ASC;</pre>
    </div>

    <!-- Close-to-Close Change -->
    <div class="section-title">Close-to-Close Change</div>
    <div class="description">
        Calculates the daily change in closing prices to identify trends and momentum in stock performance.
    </div>
    <div class="query-container">
        <pre><span class="keyword">WITH</span> daily_close <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">AS</span> date,
        <span class="function">LAST_VALUE</span>(close) <span class="keyword">OVER</span>(<span class="keyword">PARTITION BY</span> <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</span>) <span class="keyword">AS</span> close
    <span class="keyword">FROM</span>
        'your_project.your_dataset.stock_data'
)
<span class="keyword">SELECT</span>
    date,
    close - <span class="function">LAG</span>(close) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> date) <span class="keyword">AS</span> close_to_close_change
<span class="keyword">FROM</span>
    daily_close
<span class="keyword">ORDER BY</span>
    date ASC;</pre>
    </div>

    <!-- OHLC Average -->
    <div class="section-title">OHLC Average</div>
    <div class="description">
        Calculates the average of open, high, low, and close prices for a smoothed view of the stock's performance.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">AS</span> date,
    <span class="function">AVG</span>((open + high + low + close) / 4) <span class="keyword">AS</span> ohlc_average
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">GROUP BY</span>
    date
<span class="keyword">ORDER BY</span>
    date ASC;</pre>
    </div>

    <!-- Simple Moving Average -->
    <div class="section-title">Simple Moving Average (SMA)</div>
    <div class="description">
        Calculates a 5-hour moving average of closing prices to smooth out short-term price fluctuations.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    timestamp_field_0,
    close,
    <span class="function">AVG</span>(close) <span class="keyword">OVER</span> (
        <span class="keyword">ORDER BY</span> timestamp_field_0
        <span class="keyword">ROWS BETWEEN</span> 4 <span class="keyword">PRECEDING AND</span> CURRENT ROW
    ) <span class="keyword">AS</span> sma_5_hour
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">ORDER BY</span>
    timestamp_field_0;</pre>
    </div>

    <!-- VWAP -->
    <div class="section-title">Volume-Weighted Average Price (VWAP)</div>
    <div class="description">
        Calculates the average price weighted by trading volume to determine the true average price paid.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    timestamp_field_0,
    <span class="function">SUM</span>(close * volume) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>) / <span class="function">SUM</span>(volume) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>) <span class="keyword">AS</span> vwap
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">ORDER BY</span>
    timestamp_field_0 <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- Intraday Volatility -->
    <div class="section-title">Intraday Volatility</div>
    <div class="description">
        Calculates the standard deviation of closing prices within each trading day.
    </div>
    <div class="query-container">
        <pre><span class="keyword">WITH</span> intraday_volatility <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">AS</span> date,
        <span class="function">STDDEV</span>(close) <span class="keyword">AS</span> intraday_volatility
    <span class="keyword">FROM</span>
        'your_project.your_dataset.stock_data'
    <span class="keyword">GROUP BY</span>
        date
)
<span class="keyword">SELECT</span>
    date,
    intraday_volatility
<span class="keyword">FROM</span>
    intraday_volatility
<span class="keyword">ORDER BY</span>
    date <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- Price Volatility -->
    <div class="section-title">Price Volatility (Close-to-Close)</div>
    <div class="description">
        Measures day-to-day price volatility using close price standard deviation.
    </div>
    <div class="query-container">
        <pre><span class="keyword">WITH</span> daily_close <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">AS</span> date,
        <span class="function">LAST_VALUE</span>(close) <span class="keyword">OVER</span>(<span class="keyword">PARTITION BY</span> <span class="function">DATE</span>(timestamp_field_0) <span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</span>) <span class="keyword">AS</span> close
    <span class="keyword">FROM</span>
        'your_project.your_dataset.stock_data'
)
<span class="keyword">SELECT</span>
    date,
    <span class="function">STDDEV</span>(close) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> date <span class="keyword">ASC ROWS BETWEEN</span> 1 <span class="keyword">PRECEDING AND</span> CURRENT ROW) <span class="keyword">AS</span> price_volatility
<span class="keyword">FROM</span>
    daily_close
<span class="keyword">ORDER BY</span>
    date <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- Cumulative Volume -->
    <div class="section-title">Cumulative Volume</div>
    <div class="description">
        Tracks the running total of trading volume over time.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    timestamp_field_0,
    <span class="function">SUM</span>(volume) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>) <span class="keyword">AS</span> cumulative_volume
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">ORDER BY</span>
    timestamp_field_0 <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- Cumulative Price Change -->
    <div class="section-title">Cumulative Price Change</div>
    <div class="description">
        Captures the total change in price over time to track performance trajectory.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    timestamp_field_0,
    <span class="function">SUM</span>(close - <span class="function">LAG</span>(close) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>)) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>) <span class="keyword">AS</span> cumulative_price_change
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">ORDER BY</span>
    timestamp_field_0 <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- RSI -->
    <div class="section-title">Relative Strength Index (RSI)</div>
    <div class="description">
        Momentum oscillator measuring price change velocity. Uses 14-period lookback to identify overbought/oversold conditions.
    </div>
    <div class="query-container">
        <pre><span class="keyword">WITH</span> price_changes <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        timestamp_field_0,
        close - <span class="function">LAG</span>(close) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC</span>) <span class="keyword">AS</span> price_change
    <span class="keyword">FROM</span>
        'your_project.your_dataset.stock_data'
),
gains_and_losses <span class="keyword">AS</span> (
    <span class="keyword">SELECT</span>
        timestamp_field_0,
        <span class="keyword">IF</span>(price_change > 0, price_change, 0) <span class="keyword">AS</span> gain,
        <span class="keyword">IF</span>(price_change < 0, <span class="function">ABS</span>(price_change), 0) <span class="keyword">AS</span> loss
    <span class="keyword">FROM</span>
        price_changes
)
<span class="keyword">SELECT</span>
    timestamp_field_0,
    100 - (100 / (1 + (<span class="function">AVG</span>(gain) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC ROWS BETWEEN</span> 13 <span class="keyword">PRECEDING AND</span> CURRENT ROW) /
    <span class="function">AVG</span>(loss) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC ROWS BETWEEN</span> 13 <span class="keyword">PRECEDING AND</span> CURRENT ROW)))) <span class="keyword">AS</span> rsi_14_period
<span class="keyword">FROM</span>
    gains_and_losses
<span class="keyword">ORDER BY</span>
    timestamp_field_0 <span class="keyword">ASC</span>;</pre>
    </div>

    <!-- EMA -->
    <div class="section-title">Exponential Moving Average (EMA)</div>
    <div class="description">
        5-hour exponential moving average giving more weight to recent prices. Helps identify trends with faster response to price changes.
    </div>
    <div class="query-container">
        <pre><span class="keyword">SELECT</span>
    timestamp_field_0,
    <span class="function">EXP</span>(<span class="function">SUM</span>(<span class="function">LN</span>(close)) <span class="keyword">OVER</span>(<span class="keyword">ORDER BY</span> timestamp_field_0 <span class="keyword">ASC ROWS BETWEEN</span> 4 <span class="keyword">PRECEDING AND</span> CURRENT ROW)) <span class="keyword">AS</span> ema_5_hour
<span class="keyword">FROM</span>
    'your_project.your_dataset.stock_data'
<span class="keyword">ORDER BY</span>
    timestamp_field_0 <span class="keyword">ASC</span>;</pre>
    </div>
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

<div class="connection-flow">
    <!-- Connection Process Visualization -->
    <div class="step-card">
        <svg viewBox="0 0 200 200">
            <!-- BigQuery Icon -->
            <rect x="20" y="60" width="160" height="80" rx="10" fill="#4285F4"/>
            <text x="100" y="110" fill="white" text-anchor="middle" font-size="16">BigQuery</text>
            <path d="M40 80 L160 80" stroke="white" stroke-width="2"/>
            <rect x="60" y="90" width="80" height="10" fill="white" opacity="0.3"/>
            <rect x="60" y="105" width="80" height="10" fill="white" opacity="0.3"/>
        </svg>
        <h3>1. Data Source</h3>
        <p>Stock market data stored in BigQuery tables</p>
    </div>
    <div class="step-card">
        <svg viewBox="0 0 200 200">
            <!-- Connection Process -->
            <path d="M30 100 L170 100" stroke="#333" stroke-width="4" stroke-dasharray="8,4"/>
            <circle cx="100" cy="100" r="30" fill="#5C2D91"/>
            <text x="100" y="105" fill="white" text-anchor="middle" font-size="14">Connect</text>
        </svg>
        <h3>2. OAuth</h3>
        <p>Secure OAuth 2.0 connection to Google Cloud</p>
    </div>
    <div class="step-card">
        <svg viewBox="0 0 200 200">
            <!-- Power BI Icon -->
            <rect x="20" y="60" width="160" height="80" rx="10" fill="#5C2D91"/>
            <text x="100" y="110" fill="white" text-anchor="middle" font-size="16">Power BI</text>
            <rect x="40" y="85" width="120" height="40" fill="white" opacity="0.2"/>
            <circle cx="160" cy="70" r="8" fill="#44CC11"/>
        </svg>
        <h3>3. Power BI Desktop</h3>
        <p>Ready for visualization and analysis</p>
    </div>
</div>

<div class="section-header">5. Automate</div>
<p>With the connection between BigQuery and Power BI established, the final step is to automate the data ingestion process, ensuring our dashboards are always up-to-date.</p>
<p>&nbsp; &nbsp; 1) Set&nbsp;Up the Refresh Schedule: Begin by publishing your Power BI report to the Power BI service. Navigate to the dataset, select &ldquo;Scheduled Refresh,&rdquo; and choose a refresh frequency. I opted for a daily refresh to keep the data current every 24 hours.</p>
<p>&nbsp; &nbsp; 2) Configure&nbsp;Credentials: Ensure that your Google account credentials linked to BigQuery are correctly configured in the &ldquo;Data Source Credentials&rdquo; section. This allows Power BI to access the data without interruption.</p>
<p>&nbsp; &nbsp; 3) Monitor<strong>&nbsp;</strong>and Optimize: Power BI will now automatically refresh the data based on your schedule. Monitor the refresh logs for any issues and consider using incremental refresh to optimize performance as your data grows.</p>
<p>By automating the data ingestion, the pipeline ensures that the insights in Power BI are always based on the latest data, with minimal manual intervention required.</p>
</div>`
};