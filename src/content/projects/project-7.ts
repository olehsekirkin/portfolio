export default {
    id: "project-7",
    title: "Topological Data Analysis",
    image: "/images/tda.gif",
    description: "Coded application of Topological Data Analysis (TDA) for detecting market crash patterns in S&P500 data. Developed Python algorithm using persistent homology and Wasserstein distance to identify structural similarities between historical market periods.",
    technologies: ["Python", "Data Analysis"],
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
<p>&nbsp; &nbsp; 1. What is TDA<br />&nbsp; &nbsp; 2. Key Concepts<br />&nbsp; &nbsp; 3. Code the Algorithm</p>
<div class="section-header">1. What is TDA</div>
<p>First let&rsquo;s explain what TDA or Topological Data Analysis even means, and is quite simple to understand (at least the basics): is a method for analyzing complex data by focusing on its shape and structure. Topology is basically a branch of mathematics that studies the properties of shapes that remain unchanged under deformations (stretching, twisting).</p>
<p>How it works:</p>
<p>&nbsp; &nbsp; 1) Represents data as a set of points in a high-dimensional space.<br />&nbsp; &nbsp; 2) Then looks at how these points are connected at different scales.<br />&nbsp; &nbsp; 3) Identifies key features like clusters, loops or holes in the data.<br /><br />The main benefits of this type of data analysis is that it can handle high-dimensional and complex data, and it can reveal insights that traditional statistical methods might miss.</p>
<p>Unlike traditional statistical methods that often rely on averages or linear relationships, TDA can capture non-linear and geometric features in data. While conventional techniques might struggle with high-dimensional or noisy data, TDA excels in these areas. It complements rather than replaces traditional methods, offering a different perspective that can uncover hidden patterns or structures in complex datasets.</p>
<div class="section-header">2. Key Concepts</div>
<p>Some key concepts before we start:</p>
<p>&nbsp; &nbsp; - Simplicial&nbsp;Complexes:&nbsp;they are the building blocks of Topological Data Analysis. They&rsquo;re a way to represent data points and their relationship. 0-simplex is a point, 1-simplex is a line segment, 2-simplex is a triangle, 3-simplex is a tetrahedron. These are combined to form more complex structures that represents the data&rsquo;s topology.</p>
<p>&nbsp; &nbsp; - Persistent Homology:&nbsp;core technique in TDA that tracks how topological features (connected components, loops, voids) appear and disappear as we change the scale at which we observe the data.</p>
<p>&nbsp; &nbsp; - Persistence Diagrams: visual&nbsp;representations of persistent homology. They show when topological features appear and disappear across different scales. Points far from the diagonal in these diagrams represent more significant, persistent features.</p>
<p>&nbsp; &nbsp; - Homology Groups: algebraic&nbsp;structures that capture the essence of topological features; 0-dimensional homology groups represent connected components, 1-dimensional homology groups represent loops, 2-dimensional homology groups represent voids or cavities. Higher-dimensional groups capture more complex structures.</p>
<p>&nbsp; &nbsp; - Wasserstein Distance: let's&nbsp;think of it as a measure to compare two Persistence Homologies, a simple way to understand it is with the next example: imagine you have two stacks of sugar (two sets of data), so the Wasserstein Distance measures the least amount of effort you would need to move the sugar grains around to transform one stack into the shape of the other. Less effort is equal to more similar stacks; if you need to move a lot of grains around, it means that the stacks are different.</p>
<p>Topological data analysis has found applications across diverse fields, but in this post I will use it for financial analysis, trying to detect potential market crashes in the S&amp;P500, as it offers a method to determine how similar two time periods might be, based on their underlying patterns.</p>
<div class="section-header">3. Code the Algorithm</div>
<p>&nbsp;</p>
<html>
<head>
    <style>
        pre {
            background-color: #1e1e1e;
            color: #d4d4d4;
            padding: 20px;
            border-radius: 6px;
            overflow-x: auto;
        }
        .keyword { color: #569cd6; }
        .comment { color: #6a9955; }
        .string { color: #ce9178; }
        .number { color: #b5cea8; }
        .function { color: #dcdcaa; }
        .class-name { color: #4ec9b0; }
    </style>
</head>
<body>
<pre>
<span class="keyword">from</span> Algorithmimports <span class="keyword">import</span> *
<span class="keyword">import</span> numpy <span class="keyword">as</span> np
<span class="keyword">from</span> ripser <span class="keyword">import</span> Rips
<span class="keyword">import</span> persim

<span class="keyword">class</span> <span class="class-name">MuscularMagentaLion</span>(QCAlgorithm):
    <span class="keyword">def</span> <span class="function">initialize</span>(self):
        <span class="comment"># Set initial cap for algorithm to work with.</span>
        self.SetStartDate(2024, 1, 1)
        self.SetCash(10000000)
        
        self.eq = self.AddEquity(<span class="string">"SPY"</span>, Resolution.Hour).Symbol
        
        <span class="comment"># Set parameters for the algorithm: first the window size for the calculations,</span>
        <span class="comment"># then the threshold for trading decisions.</span>
        self.lookback = 20
        self.threshold = 1
        
        self.rips = Rips(maxdim=2)
        
        <span class="comment"># Create a rolling window to store closing prices.</span>
        self.close_window = RollingWindow[float](self.lookback*5)
        
        self.WarmUpFinished = <span class="keyword">False</span>
    
    <span class="keyword">def</span> <span class="function">OnData</span>(self, data: Slice):
        <span class="keyword">if</span> self.IsWarmingUp:
            <span class="keyword">return</span>
            
        <span class="keyword">if</span> <span class="keyword">not</span> (data.ContainsKey(self.eq) <span class="keyword">and</span> data[self.eq] <span class="keyword">is not</span> None:
            <span class="keyword">return</span>
            
        self.close_window.Add(data[self.eq].Close)
        
        <span class="keyword">if</span> <span class="keyword">not</span> self.close_window.IsReady:
            <span class="keyword">return</span>
            
        <span class="comment"># Rolling window to numpy array.</span>
        closes_list = list(self.close_window)
        self.prices = np.array(closes_list)
        
        lgr = np.log(self.prices[1:] / self.prices[:-1])
        
        <span class="comment"># Compute Wasserstein Distance.</span>
        wasserstein_dists = self.compute_wasserstein_distances(lgr, self.lookback, self.rips)
        wd = sum(wasserstein_dists)
        
        <span class="comment"># Trading logic based on Wasserstein Distance.</span>
        <span class="keyword">if</span> self.Portfolio[self.eq].IsShort:
            <span class="keyword">if</span> wd >= self.threshold:
                self.SetHoldings(self.eq, 0.80, True)
            <span class="keyword">else</span>: <span class="keyword">return</span>
        <span class="keyword">elif</span> self.Portfolio[self.eq].IsLong:
            <span class="keyword">if</span> wd <= self.threshold:
                self.SetHoldings(self.eq, -0.80, True)
            <span class="keyword">else</span>: <span class="keyword">return</span>
        <span class="keyword">else</span>: self.SetHoldings(self.eq, 0.80)
    
    <span class="keyword">def</span> <span class="function">compute_wasserstein_distances</span>(self, log_returns, window_size, rips):
        <span class="string">"""Compute the wasserstein distances between consecutive windows of log returns."""</span>
        n = len(log_returns) - (2 * window_size) + 1
        distances = np.full((n, 1), np.nan)
        
        <span class="keyword">for</span> i <span class="keyword">in</span> range(n):
            segment1 = log_returns[i:i+window_size].reshape(-1, 1)
            segment2 = log_returns[i+window_size:i+(2*window_size)].reshape(-1, 1)
            
            <span class="keyword">if</span> segment1.shape[0] != window_size <span class="keyword">or</span> segment2.shape[0] != window_size:
                <span class="keyword">continue</span>
                
            <span class="comment"># Compute Persistence Diagrams.</span>
            dgm1 = rips.fit_transform(segment1)
            dgm2 = rips.fit_transform(segment2)
            
            <span class="comment"># Calculate Wasserstein Distance between 2D persistence diagrams.</span>
            distance = persim.wasserstein(dgm1[1], dgm2[1], matching=False)
            distances[i] = distance
            
        <span class="keyword">return</span> distances
</pre>
</body>
</html>
    `
  };