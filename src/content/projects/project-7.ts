export default {
    id: "project-7",
    title: "Topological Data Analysis",
    image: "/images/tda.gif",
    description: "Pioneered application of Topological Data Analysis (TDA) for detecting market crash patterns in S&P500 data. Developed Python algorithm using persistent homology and Wasserstein distance to identify structural similarities between historical market periods.",
    technologies: ["Python"],
    date: "2024-02-01",
    content: `
<p>&nbsp; &nbsp; 1. What is TDA<br />&nbsp; &nbsp; 2. Key Concepts<br />&nbsp; &nbsp; 3. Code the Algorithm</p>
<p><strong>1. What is TDA</strong></p>
<p>First let&rsquo;s explain what TDA or Topological Data Analysis even means, and is quite simple to understand (at least the basics): is a method for analyzing complex data by focusing on its shape and structure. Topology is basically a branch of mathematics that studies the properties of shapes that remain unchanged under deformations (stretching, twisting).</p>
<p>How it works:</p>
<p>&nbsp; &nbsp; 1) Represents data as a set of points in a high-dimensional space.<br />&nbsp; &nbsp; 2) Then looks at how these points are connected at different scales.<br />&nbsp; &nbsp; 3) Identifies key features like clusters, loops or holes in the data.<br /><br />The main benefits of this type of data analysis is that it can handle high-dimensional and complex data, and it can reveal insights that traditional statistical methods might miss.</p>
<p>Unlike traditional statistical methods that often rely on averages or linear relationships, TDA can capture non-linear and geometric features in data. While conventional techniques might struggle with high-dimensional or noisy data, TDA excels in these areas. It complements rather than replaces traditional methods, offering a different perspective that can uncover hidden patterns or structures in complex datasets.</p>
<p><strong>2. Key Concepts</strong></p>
<p>Some key concepts before we start:</p>
<p>&nbsp; &nbsp; - Simplicial&nbsp;Complexes:&nbsp;they are the building blocks of Topological Data Analysis. They&rsquo;re a way to represent data points and their relationship. 0-simplex is a point, 1-simplex is a line segment, 2-simplex is a triangle, 3-simplex is a tetrahedron. These are combined to form more complex structures that represents the data&rsquo;s topology.</p>
<p>&nbsp; &nbsp; - Persistent Homology:&nbsp;core technique in TDA that tracks how topological features (connected components, loops, voids) appear and disappear as we change the scale at which we observe the data.</p>
<p>&nbsp; &nbsp; - Persistence Diagrams: visual&nbsp;representations of persistent homology. They show when topological features appear and disappear across different scales. Points far from the diagonal in these diagrams represent more significant, persistent features.</p>
<p>&nbsp; &nbsp; - Homology Groups: algebraic&nbsp;structures that capture the essence of topological features; 0-dimensional homology groups represent connected components, 1-dimensional homology groups represent loops, 2-dimensional homology groups represent voids or cavities. Higher-dimensional groups capture more complex structures.</p>
<p>&nbsp; &nbsp; - Wasserstein Distance: let's&nbsp;think of it as a measure to compare two Persistence Homologies, a simple way to understand it is with the next example: imagine you have two stacks of sugar (two sets of data), so the Wasserstein Distance measures the least amount of effort you would need to move the sugar grains around to transform one stack into the shape of the other. Less effort is equal to more similar stacks; if you need to move a lot of grains around, it means that the stacks are different.</p>
<p>Topological data analysis has found applications across diverse fields, but in this post I will use it for financial analysis, trying to detect potential market crashes in the S&amp;P500, as it offers a method to determine how similar two time periods might be, based on their underlying patterns.</p>
<p><strong>3. Code the Algorithm</strong></p>
<p>&nbsp;</p>
    `
  };