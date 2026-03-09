---
#icon: material/folder-open-outline
icon: material/medal
---

🚨 **<span style="color: red;">Important Lab Dependency</span>**

This mission requires configuration created in the following missions:

1. **[AI Agent Track ⮕ Scripted Agent: Mission 1 - Configure Scripted Agent to answer basic questions](../AI_Lab_Scripted_Mission1/)**<br>
2. **[AI Agent Track ⮕ Scripted Agent: Mission 2 - Integrate Scripted Agent with Voice Flow](../AI_Lab_Scripted_Mission2/)**<br>
3. **[AI Agent Track ⮕ Scripted Agent: Mission 3 - Configure flow to track an order](../AI_Lab_Scripted_Mission3/)**<br>
4. **[AI Agent Track ⮕ Scripted Agent: Mission 4 - Configure the fulfillment](../AI_Lab_Scripted_Mission4/)**<br>

If this mission was not completed, some steps in current mission will not function correctly.

---

## Mission Details

In the previous **Mission 4**, you configured a fulfillment flow that executes an API call in the WxCC Voice flow based on the order number and parses the order status. In this mission, you will configure the flow to return this status to **Webex AI Agent Studio** so that the Scripted AI agent can deliver the result back to the caller.

## Build

### Task 1. Add VirtualAgentV2 block to bring data back to AI Studio

> Note: To deliver the call back to AI Studio, you need to add an additional **VirtualAgentV2** block to the flow.

1. Open **<copy>Autonomous*Scripted_Flow_2000*<w class="attendee"></w></copy>**. Click on **Edit** the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/6.56.gif)

2. Delete the **Disconnect Contact** node and add **VirtualAgentV2** node. Connect **HttpRequest** block to **VirtualAgentV2** block.
   ![Profiles](../graphics/Lab1_AI_Agent/6.57.gif)

3. Click on **VirtualAgentV2**. In the Contact Center AI Config, search for scripted and select **Webex AI Agent (Scripted)**. Under the Virtual Agent option, search for the Scripted AI Agent with name **<copy><w class="attendee"></w>\_Scripted_AI_Agent</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/6.58.gif)

4. Connect Escalated output from the **VirtualAgentV2** node to the **Queue** node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.59.gif)

5. Add **Disconnect Contact** node and connect **Handled** output to the **Disconnect Contact** node.
   ![Profiles](../graphics/Lab1_AI_Agent/6.60.gif)

6. You can publish the flow at this point.
   ![Profiles](../graphics/Lab1_AI_Agent/6.61.gif)

### Task 2. Configure State Event in the VirtualAgentV2 block

> Note: We need to configure the **VirtualAgentV2** block to send the order status to AI Studio, which will be retrieved in the specific response. For this, we will utilize the State Event.

1. Select the **VirtualAgentV2** block that you have added in the previous Task and click on **State Event**.
   ![Profiles](../graphics/Lab1_AI_Agent/6.62.gif)

2. Configure the **State Event** with the following: </br>

   > Event Name: **order_status** </br>
   > Event Data: **{"status":"{{order_status}}"}**

   ![Profiles](../graphics/Lab1_AI_Agent/6.63.gif)

3. Understand the **State Event** configuration. See the picture below.
   ![Profiles](../graphics/Lab1_AI_Agent/6.64.png)

4. You can publish the flow at this point.
   ![Profiles](../graphics/Lab1_AI_Agent/6.61.gif)

### Task 3. Review the order_status Response configuration

1. Go to **Webex AI Agent Studio** and open your Scripted Agent. If you followed all the steps the name of the Scripted Agent should be **<copy><w class="attendee"></w>\_Scripted_AI_Agent</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/6.65.gif)

2. Go to **Script > Responses** and search for the Response with the name **order_status**. This response is preconfigured in this lab for you. Go to **Voice** channel and review the configurations.
   ![Profiles](../graphics/Lab1_AI_Agent/6.66.gif)

3. Understand the **order_status** configuration. Please see the picture below.
   ![Profiles](../graphics/Lab1_AI_Agent/6.67.png)

### Task 4. Test Scripted AI agent order status flow

1. Dial the number that is assosiated with **<copy><w class="attendee"></w>\_2000_Channel</copy>** Channel.
   ![Profiles](../graphics/Lab1_AI_Agent/6.37.png)

2. During IVR, press 2 to and say "I want to track my order". Provide the order details that you created earlier, or use the order with number 22 for the example.

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
