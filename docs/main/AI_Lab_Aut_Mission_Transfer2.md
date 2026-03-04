---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 6: Configure Transfer Action for Webex AI Agent

**<details><summary>What is a Transfer to Webex AI Agent Action? <span style="color: orange;"></span></summary>**

Transfer Action is a task that an AI agent performs by understanding user intents and transferring the interaction back to the WxCC flow with custom data for connecting to another Webex AI Agent.

## </details>

## Mission overview

Your mission is to:

For this mission, the proctor has created Webex AI Agent named **Flower_Wholesale**. The goal of this mission is to transfer the call from your AI agent to **Flower_Wholesale** using the Transfer operation. <br>
![Profiles](../graphics/Lab1_AI_Agent/TransfertoAI.png)

---

## Build

### Task 1. Adjust Transfer Action in AI Agent Studio portal

1. Open your AI agent with name **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>** and then click on **Actions**.
   ![Profiles](../graphics/Lab1_AI_Agent/14.1.png)

2. Select **Transfer_to_different_department** action.
   ![Profiles](../graphics/Lab1_AI_Agent/14.2.png)

3. Adjust the Transfer condition by adding **<copy>or Wholesale</copy>** as the department option.
   ![Profiles](../graphics/Lab1_AI_Agent/14.3.gif)

4. Adjust entiry example by adding **<copy>Wholesale</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/14.4.gif)

5. **Save** and **Publish** the changes.
   ![Profiles](../graphics/Lab1_AI_Agent/14.5.gif)

### Task 2. Configure Voice flow to Transfer the call to **Flower_Wholesale** AI Agent

1. Go to **Control Hub** and open up your flow **<copy>AutonomousAI*Flow_2000*<w class="attendee"></w></copy>**. Click on **Edit** the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/14.6.gif)

2. Click on **Case** node and add one more option with value **<copy>Wholesale</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/14.7.gif)

3. Bring additional **VirtualAgentV2** node to the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/14.8.gif)

4. Connect **Wholesale** output from **Case** node to **VirtualAgentV2**. Connect **Handled** output from **VirtualAgentV2** to the **DisconnectContact** node. Connect **Escalate** output from **VirtualAgentV2** to Queue that is configured with **<w class="attendee"></w>\_2000_Voice_Queue**.
   ![Profiles](../graphics/Lab1_AI_Agent/14.9.gif)

5. Click on the **VirtualAgentV2** and select **Webex AI Agent (Autonomous)** with name **Flower_WholeSale**.
   ![Profiles](../graphics/Lab1_AI_Agent/14.10.gif)

6. **Validate** and **Publish** the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/14.11.gif)

### Task 3. Test Webex AI Agent transfer to Webex AI Agent

Place a call to the number associated with your Channel **<copy><w class="attendee"></w>\_2000_Channel</copy>** and ask to speak with the Wholesale department. You will be connected to an AI agent who can assist you with ordering flowers if you need to purchase at least one box (each box contains 100 flowers). In this case, the price will be different. Below, you can find the screenshot of the knowledge base used by the Flower_WholeSale AI Agent.
![Profiles](../graphics/Lab1_AI_Agent/14.12.png)

Or you can review the full configuration of the **Flower_Wholesale** AI Agent in the AI Agent Studio.
![Profiles](../graphics/Lab1_AI_Agent/14.14.png)

For your reference, please see the chat discussion with the Flower_WholeSale AI Agent. This will help you have a similar dialogue during your test call.
![Profiles](../graphics/Lab1_AI_Agent/14.13.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
