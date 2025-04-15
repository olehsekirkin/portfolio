export default {
    id: "project-9",
    title: "Got a $1? You got yourself a drone (kinda...)",
    image: "/images/drone.png",
    description: "Designed and built a custom drone using a budget-friendly ESP32 module purchased from Aliexpress. The drone features a lightweight frame, a camera for aerial photography, and custom firmware for flight control. This project explores the potential of low-cost hardware for innovative applications.",
    technologies: ["C++", "Arduino IDE", "ESP32"],
    date: "2024-03-15",
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
          .drone-container {
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
      </style>
  </head>
  <body>
      <div class="drone-container">
          
          <div class="text-content">
              <p>In the world of DIY electronics, the ESP32 microcontroller has become a game-changer due to its versatility, low cost, and powerful features. My latest project involves building a fully functional drone using a $1 ESP32 module purchased from Aliexpress. This drone is equipped with a lightweight frame, a camera for aerial photography, and custom firmware for flight control. Here's a detailed breakdown of the project and the steps involved.</p>
              
              <p>&nbsp; &nbsp; 1. Hardware Selection: Choosing the Right Components<br />&nbsp; &nbsp; 2. Firmware Development: Writing Custom Flight Control Code<br />&nbsp; &nbsp; 3. Assembly: Building the Drone Frame and Wiring Components<br />&nbsp; &nbsp; 4. Testing and Calibration: Ensuring Stable Flight<br />&nbsp; &nbsp; 5. Future Enhancements: Adding Advanced Features</p>
          </div>
  
          <!-- Hardware Selection Section -->
          <div class="section-header">1. Hardware Selection: Choosing the Right Components</div>
          
          <div class="text-content">
              <p>The foundation of any drone project lies in selecting the right components. For this build, I focused on affordability and functionality. Here's a breakdown of the key components used:</p>
          </div>
  
          <div class="table-container">
              <div class="table-title">Drone Components</div>
              <div class="table-description">List of components used in the drone build</div>
              <table>
                  <thead>
                      <tr>
                          <th>Component</th>
                          <th>Description</th>
                          <th>Cost</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>ESP32 Module</td>
                          <td>Microcontroller for flight control</td>
                          <td>$1.00</td>
                      </tr>
                      <tr>
                          <td>Brushless Motors</td>
                          <td>4x motors for propulsion</td>
                          <td>$20.00</td>
                      </tr>
                      <tr>
                          <td>Electronic Speed Controllers (ESCs)</td>
                          <td>4x ESCs to control motor speed</td>
                          <td>$16.00</td>
                      </tr>
                      <tr>
                          <td>Propellers</td>
                          <td>4x propellers for lift</td>
                          <td>$5.00</td>
                      </tr>
                      <tr>
                          <td>LiPo Battery</td>
                          <td>11.1V 2200mAh battery for power</td>
                          <td>$15.00</td>
                      </tr>
                      <tr>
                          <td>Frame</td>
                          <td>Lightweight carbon fiber frame</td>
                          <td>$10.00</td>
                      </tr>
                      <tr>
                          <td>Camera</td>
                          <td>720p camera for aerial photography</td>
                          <td>$12.00</td>
                      </tr>
                  </tbody>
              </table>
          </div>
  
          <!-- Firmware Development Section -->
          <div class="section-header">2. Firmware Development: Writing Custom Flight Control Code</div>
          
          <div class="text-content">
              <p>The ESP32 module serves as the brain of the drone, running custom firmware written in C++ using the Arduino IDE. The firmware handles flight stabilization, motor control, and communication with the remote controller. Here's an overview of the key features:</p>
              
              <p>&nbsp; &nbsp; - PID Controller: A Proportional-Integral-Derivative (PID) controller was implemented to stabilize the drone during flight. The PID algorithm adjusts motor speeds in real-time to maintain balance and orientation.<br />&nbsp; &nbsp; - Remote Control: The drone communicates with a custom remote controller via Bluetooth, allowing for real-time control of throttle, pitch, roll, and yaw.<br />&nbsp; &nbsp; - Telemetry: The firmware includes telemetry functionality, sending real-time data such as battery voltage and altitude back to the controller.</p>
          </div>
  
          <div class="visualization-card">
              <div class="visualization-title">PID Controller Diagram</div>
              <img class="visualization-image" src="https://i.ibb.co/0jZQY7X/pid-controller.png" alt="PID Controller Diagram" />
              <div class="visualization-description">Visual representation of the PID controller used for flight stabilization.</div>
          </div>
  
          <!-- Assembly Section -->
          <div class="section-header">3. Assembly: Building the Drone Frame and Wiring Components</div>
          
          <div class="text-content">
              <p>With all components selected and firmware ready, the next step was assembling the drone. The lightweight carbon fiber frame was chosen for its durability and low weight. Here's a step-by-step breakdown of the assembly process:</p>
              
              <p>&nbsp; &nbsp; 1. Mounting the Motors: The brushless motors were securely attached to the arms of the frame using screws.<br />&nbsp; &nbsp; 2. Wiring the ESCs: Each motor was connected to an ESC, which in turn was wired to the ESP32 module.<br />&nbsp; &nbsp; 3. Attaching the Propellers: The propellers were mounted onto the motors, ensuring they were securely fastened.<br />&nbsp; &nbsp; 4. Installing the Battery: The LiPo battery was mounted at the center of the frame to maintain balance.<br />&nbsp; &nbsp; 5. Connecting the Camera: The 720p camera was attached to the front of the frame, with its power and data lines connected to the ESP32.</p>
          </div>
  
          <div class="visualization-card">
              <div class="visualization-title">Drone Assembly</div>
              <img class="visualization-image" src="https://i.ibb.co/0jZQY7X/drone-assembly.jpg" alt="Drone Assembly" />
              <div class="visualization-description">The completed drone assembly, ready for testing.</div>
          </div>
  
          <!-- Testing and Calibration Section -->
          <div class="section-header">4. Testing and Calibration: Ensuring Stable Flight</div>
          
          <div class="text-content">
              <p>After assembly, the drone underwent rigorous testing and calibration to ensure stable flight. The PID controller was fine-tuned to achieve optimal performance. Here are the key steps in the testing process:</p>
              
              <p>&nbsp; &nbsp; - Initial Hover Test: The drone was tested in a controlled environment to ensure it could hover steadily.<br />&nbsp; &nbsp; - PID Tuning: The PID constants were adjusted to minimize oscillations and improve stability.<br />&nbsp; &nbsp; - Remote Control Test: The drone was tested with the remote controller to ensure smooth control of throttle, pitch, roll, and yaw.<br />&nbsp; &nbsp; - Battery Life Test: The drone was flown continuously to measure battery life and ensure safe operation.</p>
          </div>
  
          <div class="visualization-card">
              <div class="visualization-title">Drone in Flight</div>
              <img class="visualization-image" src="https://i.ibb.co/0jZQY7X/drone-flight.jpg" alt="Drone in Flight" />
              <div class="visualization-description">The drone in action during a test flight.</div>
          </div>
  
          <!-- Future Enhancements Section -->
          <div class="section-header">5. Future Enhancements: Adding Advanced Features</div>
          
          <div class="text-content">
              <p>While the drone is fully functional, there are several enhancements I plan to implement in the future:</p>
              
              <p>&nbsp; &nbsp; - GPS Navigation: Adding a GPS module to enable autonomous flight and waypoint navigation.<br />&nbsp; &nbsp; - Obstacle Avoidance: Integrating ultrasonic sensors or a camera-based system for obstacle detection and avoidance.<br />&nbsp; &nbsp; - Live Video Streaming: Upgrading the camera to support live video streaming to a ground station.<br />&nbsp; &nbsp; - Extended Battery Life: Exploring higher-capacity batteries or solar charging for longer flight times.</p>
          </div>
  
          <div class="text-content">
          </div>
      </div>
  </body>
  </html>
    `
  };