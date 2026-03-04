---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 4: Configure Fulfilment Action and create an order

**<details><summary>What is fulfilment Action? <span style="color: orange;"></span></summary>**

Fulfilment Action is a task that an AI agent performs by understanding user intents and completes by connecting to external systems over API.

For more information, visit [Webex Documentation](https://help.webex.com/en-us/article/ncs9r37/Webex-AI-Agent-Studio-Administration-guide#concept-template_5ea99e1f-a679-4cf9-8e33-7a4f83d9f66a){:target="\_blank"}.

## </details>

## Mission overview

Your mission is to:

Configure Fulfilment action to collect order details from the customer and send them to a third-party application via APIs.

![Profiles](../graphics/Lab1_AI_Agent/Fulfilment.png)

---

## Build

### Task 1. Create Service and AI Agent Flow in Webex Connect

1. From **Control Hub**, go to **Contact Center** > **Overview** and open up the **Webex Connect** Portal.
   ![Profiles](../graphics/Lab1_AI_Agent/2.9.gif)

2. Create a new Service with name **<copy><w class="attendee"></w>\_2000_Service_</copy>**
   ![Profiles](../graphics/Lab1_AI_Agent/2.10.gif)

3. Click on **Flows** and create new flow with the name **_<copy>Create_Order_Flowers</copy>_**
   ![Profiles](../graphics/Lab1_AI_Agent/2.11.gif)

4. From the Integrations list, select AI Agent.
   ![Profiles](../graphics/Lab1_AI_Agent/2.12.gif)

5. For now, **Save** the flow and **Make it live**. We will return to configuring this flow later. Creating it now is necessary to complete configurations in the AI Agent Studio Portal.
   ![Profiles](../graphics/Lab1_AI_Agent/2.13.gif)

### Task 2. Configure Action in the AI Studio

1. Go to **Webex AI Agent AI** Studio Portal.
   ![Profiles](../graphics/Lab1_AI_Agent/2.14.gif)

2. Select your AI agent with name **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>** that you created earlier and go to **Actions**. You will see one Action is already created by default for the Agent Handover. We will now create few more actions.
   ![Profiles](../graphics/Lab1_AI_Agent/2.17.gif)

3. Click on create <b>New Action</b>. From the drop-down option, select **Fulfillment action**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.18.png)

4. Configure it with name **_<copy>Create_New_Order</copy>_** and the Action description **_<copy>Collect order details, delivery address, total and response with the orderNumber once the order is completed.</copy>_**. In the Action score select <b>Slot filling and fulfillment</b>.
   ![Profiles](../graphics/Lab1_AI_Agent/2.18a.gif)

5. Scroll down and click to create **New input entity**. Fill up the table with the following and then click on **Add**. <br>
   > Entity Name: **_<copy>address</copy>_** <br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>Collect the customer's delivery address</copy>_**<br>
   > Example: **_<copy>548 Catalina Drive, Cary, NC 27515</copy>_** <br>
   > Required: <b>Yes</b>
   ![Profiles](../graphics/Lab1_AI_Agent/2.19.gif)

6. By following the same pattern, create an entity that specifies whether the customer requires delivery. <br>
   > Entity Name: **_<copy>delivery</copy>_**<br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>Check if the customer needs delivery or not. Event if they want to proceed with order without specifying the delivery details. If the customer wants to confirm the order but didn't specify if they need delivery or not, ask one more time if they need the delivery or not.</copy>_**<br>
   > Example: **_<copy>Yes</copy>_**<br>
   > Example: **_<copy>No</copy>_**<br>
   > Required: <b>Yes</b>

7. By following the same pattern, create an entity to collect the customer's phone number.<br>
   > Entity Name: **_<copy>phoneNumber</copy>_**<br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>Collect customer's phone number. Before the customer complete the order, ask if they would like to receive confirmation over the SMS. If so, collect the phone number.</copy>_**<br>
   > Example: **_<copy>3477579861</copy>_**<br>
   > Required: <b>Yes</b>

8. By following the same pattern, create an entity to collect the customer's order details.<br>
   > Entity Name: **_<copy>orderDetails</copy>_**<br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>Collect the flowers and bouquets information that customer orders. Make sure to do correct math. If one rose is 20 dollars and the customer would like buy 9 roses then the price should be 180 dollars. Don't use double quotes (") in the generated responses.</copy>_**<br>
   > Example: **_<copy>Romantic Roses standard bouquet and one more bouquet with 9 roses</copy>_**<br>
   > Required: <b>Yes</b>

9. By following the same pattern, create an entity to store the total price information of the order.<br>
   > Entity Name: **_<copy>orderTotal</copy>_**<br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>After the customer inform if they need delivery or not, and confirm that they would like to proceed with completing the order, collect the Total information and assigned it to this slot.</copy>_**<br>
   > Example: **_<copy>150 dollars, 70 dollars</copy>_**<br>
   > Required: <b>Yes</b>

10. By following the same pattern, create an entity to store the order status information.<br>
   > Entity Name: **_<copy>status</copy>_**<br>
   > Entity Type: <b>string</b> <br>
   > Description: **_<copy>Always create it as "new"</copy>_**<br>
   > Example: **_<copy>new</copy>_**<br>
   > Required: <b>Yes</b>

11. At this point you should see 6 created entities. Please double check that your configuration matches the screenshot below.
    ![Profiles](../graphics/Lab1_AI_Agent/2.61.png)

12. In the **Webex Connect Builder Fulfillment**, select Service: **<copy><w class="attendee"></w>\_2000_Service_</copy>** and Flow: <b>Create_Order_Flowers</b>. Click on **Add**.
    ![Profiles](../graphics/Lab1_AI_Agent/2.22.png)

13. **Publish** the update of your AI Agent.
    ![Profiles](../graphics/Lab1_AI_Agent/2.23.gif)

### Task 3. Deliver collected order information to Webex Connect for fulfillment

1.  Go to the Webex Connect, select the Service **<copy><w class="attendee"></w>\_2000_Service</copy>** and click on <b>Manage</b> the flow that you have created earlier.
    ![Profiles](../graphics/Lab1_AI_Agent/2.24.gif)

2. Click on **Edit** the flow on the right top. Then double click on the AI Agent event. In the Provide Sample JSON, replace the standard JSON body with the following: 
   ![Profiles](../graphics/Lab1_AI_Agent/2.62a.gif)
<br>
    ``` JSON
    {
      "orderDetails": "ID",
      "orderTotal": "Type",
      "delivery": "Type",
      "address": "Type",
      "status": "Type",
      "phoneNumber": "Type"
    }
    ```


4.  Then click on **Parse** and **Save** the change.
    ![Profiles](../graphics/Lab1_AI_Agent/2.62.gif)

5.  Drag and drop an **HTTP Request** node from the left side of the Webex Connect Flow Builder. Connect **AI Agent** block to the **HTTP Request** block.
    ![Profiles](../graphics/Lab1_AI_Agent/2.27.gif)

6.  Open up the HTTP Request node and configure it with the following HTTP Request: <br>

    > Method: **POST**
    > <br>
    > Endpoint URL: **_<copy>https://67e9aa0bbdcaa2b7f5b9ed62.mockapi.io/customerOrder</copy>_**<br>
    > Header: **_<copy>Content-Type</copy>_**: **_<copy>application/json</copy>_**
    > <br>
    > Body: <br>
    >       ``` JSON
    >       {
    >        "orderDetails": "$(n2.aiAgent.orderDetails)",
    >        "orderTotal": "$(n2.aiAgent.orderTotal)",
    >        "delivery": "$(n2.aiAgent.delivery)",
    >        "address": "$(n2.aiAgent.address)",
    >        "status": "$(n2.aiAgent.status)",
    >        "phoneNumber": "$(n2.aiAgent.phoneNumber)"
    >       }
    >       ```   
    > <br>
    >
    > Output Variable Type: <b>JSON</b><br>
    > Click on **+Add Variable**<br>
    > Output Variable Name: **_<copy>orderNumber</copy>_**<br>
    > Response Entity: **_Body_**<br>
    > Response Path **_<copy>$.id</copy>_**<br>
     ![Profiles](../graphics/Lab1_AI_Agent/2.63.gif)

7.  Compare your settings with the screenshot below to make sure you configured the HTTP Request correctly. Make sure you **Save** the changes.
    ![Profiles](../graphics/Lab1_AI_Agent/2.29.png)

8.  Save changes and click on **Make Live**.
    ![Profiles](../graphics/Lab1_AI_Agent/2.32.gif)

### Task 4. Deliver data from Webex Connect to AI studio for the response to the customer

1. <span style="color: red;">[Read Only]</span> Once the HTTP request is completed a new object will be created on the third-party application. You can see all objects by using the this link [https://67e9aa0bbdcaa2b7f5b9ed62.mockapi.io/customerOrder](https://67e9aa0bbdcaa2b7f5b9ed62.mockapi.io/customerOrder){:target="\_blank"}. Below you can see the screenshot with all orders information. Currently there are only 2 orders, but by the time of this lab there could be more.
   ![Profiles](../graphics/Lab1_AI_Agent/2.64.png)
   Each order/object will contain all the information that we sent from AI Studio but one - id. This key is created automatically once we create the object. The goal of this Task is to send the value of the **id** back to the AI Agent so AI Agent can provide it to the customer while they are still in live contact, like you can see on the picture below.<br>
   ![Profiles](../graphics/Lab1_AI_Agent/2.31.png)

2. <span style="color: red;">[Read Only]</span> When you were configuring HTTP Request in your previous Task, on the bottom of the request you were configuring the Output Variable. This variable will be used to parse the unique order **id** and pass the value to the Output Variable with name **orderNumber**. See the screenshot below. In the next step, we will be configuring this **orderNumber** variable to be sent to Webex AI studio.</br>
   ![Profiles](../graphics/Lab1_AI_Agent/2.65.png)

3. While on your Webex Connect flow, click on **Edit** the flow, then click on the **Settings** and on the top select **Flow Outcomes** and expand **Last Execution Status**. In the **Define key-value pairs to be sent to the AI Agent** select **Enter JSON**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.66.gif)

4. We need to add the key-value pair to the existing JSON body. Add the comma after the last pair and insert **_<copy>"orderNumber": "$(n3.orderNumber)"</copy>_**. Make sure there is no comma after the pair that you inserted. Then click on **Save**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.37a.png) <br>
   <br>
   Also see this change in action below.
   ![Profiles](../graphics/Lab1_AI_Agent/2.38.gif)

5. Click on **Make Live** to publish the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/2.67.gif)

6. Wait until the flow become **Live** if you want to do any tests. This may take a few minutes.
   ![Profiles](../graphics/Lab1_AI_Agent/2.85.png)

### Task 5. Configure SMS confirmation

1. On the right top click on **Edit**. Then, from the available **Utilities** on the left side, find the **SMS** node and drag and drop the block to the flow. Connect **HTTP Request** node to the **SMS** node.
   ![Profiles](../graphics/Lab1_AI_Agent/2.68.gif)

2. Double click on the SMS block and configure the following:
   > Destination: **<copy>$(n2.aiAgent.phoneNumber)</copy>**<br>
   > From Number: **<copy>447507201958</copy>**<br>
   > Message Type: **Text**<br>
   > <br>
   > Message as below:<br>
   > <br>
   > <b>Here is your order details:<br>
   > orderNumber: "$(n3.orderNumber)"<br>
   >orderDetails: "$(n2.aiAgent.orderDetails)"<br>
   > orderTotal: "$(n2.aiAgent.orderTotal)"<br>
   >delivery: "$(n2.aiAgent.delivery)"<br>
   > address: "$(n2.aiAgent.address)"<br>
   >status: "$(n2.aiAgent.status)"<br>
   > phoneNumber: "$(n2.aiAgent.phoneNumber)"<br></b>
   >
   ![Profiles](../graphics/Lab1_AI_Agent/2.69.gif)

3. Save and click on **Make Live**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.70.gif)

### Task 6. Test the order creating and details delivery over SMS

1. In the Webex AI Agent Studio, click on preview and order flowers for your friend. Try to order flowers with or without delivery. When asking for your number, **provide your cellphone number without +**. Complete the order.
   ![Profiles](../graphics/Lab1_AI_Agent/2.72.gif)

2. Check if the confirmation SMS was received on your phone. </br>
   ![Profiles](../graphics/Lab1_AI_Agent/2.73.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
