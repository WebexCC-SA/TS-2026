---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 6: Configure Transfer Action for Webex AI Agent

**<details><summary>Good to Know: <span style="color: blue;">What is a Transfer to Webex AI Agent Action?</span></summary>**

Transfer Action is a task that an AI agent performs by understanding user intents and transferring the interaction back to the WxCC flow with custom data for connecting to another Webex AI Agent.

## </details>

## Mission overview

Your mission is to:

 - The goal of this mission is to transfer the call from your AI agent to **Flower_Wholesale** (preconfigured) using the Transfer operation. <br>
![Profiles](../graphics/Lab1_AI_Agent/TransfertoAI.png)


### Preconfigured entities      
     
- Webex AI Agent: **Flower_Wholesale**.

---

## Build

### Task 1. Adjust Transfer Action in AI Agent Studio portal

1. Open your AI agent with name **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_2000_AutoAI_Lab">Your_Attendee_ID</span>_2000_AutoAI_Lab<span class="copy" title="Click to copy!"></span></span>** and then click on **Actions**.
    ![Profiles](../graphics/Lab1_AI_Agent/14.1.png)<br>

2. Click on **Transfer_to_different_department** action.
    ![Profiles](../graphics/Lab1_AI_Agent/14.2.png)<br>

3. Adjust the **Transfer condition** by adding **or Wholesale** as the department option.<br> 
    > Copy the following text: **When the customer wants to transfer the call to HR or Billing or Wholesale department use this Action.**<span class="copy-static" data-copy-text="When the customer wants to transfer the call to HR or Billing or Wholesale department use this Action."><span class="copy" title="Click to copy!"></span></span><br>

    ![Profiles](../graphics/Lab1_AI_Agent/14.3.gif)<br>

4. In the **Input entities** for **department** entity, click on edit button on the right under **Controls** column. In the new window click on **+Add** and write **Wholesale**<span class="copy-static" data-copy-text="Wholesale"><span class="copy" title="Click to copy!"></span></span>.
    ![Profiles](../graphics/Lab1_AI_Agent/14.4.gif)<br>

5. **Save** and **Publish** the changes. Provide any version name in popped up window (e.g. "1.3").<br>
    ![Profiles](../graphics/Lab1_AI_Agent/14.5.gif)<br>

### Task 2. Configure Voice flow to Transfer the call to **Flower_Wholesale** AI Agent

1. Go to **Control Hub** and open up your flow **<span class="attendee-id-container">AutonomousAIFlow_2000_<span class="attendee-id-placeholder" data-prefix="AutonomousAIFlow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**. Click on **Edit** the flow.
    ![Profiles](../graphics/Lab1_AI_Agent/14.6.gif)<br>

2. Click on **Case** node and add one more option with value **Wholesale**<span class="copy-static" data-copy-text="BlaBlaBla"><span class="copy" title="Click to copy!"></span></span>.

3. Bring additional **VirtualAgentV2** node to the flow. Connect **Wholesale** output from **Case** node to **VirtualAgentV2**.
    ![Profiles](../graphics/Lab1_AI_Agent/14.8.gif)<br>

4. Connect **Handled** output from **VirtualAgentV2** to the **DisconnectContact** node. Connect **Escalate** output from **VirtualAgentV2** to **Queue Contact**.
    ![Profiles](../graphics/Lab1_AI_Agent/14.9.gif)<br>

5. Click on the **VirtualAgentV2** and configure as follows:<br>
    
    > Set **Static Contact Center AI Config**<br>
    > Contact Center AI Config: **Webex AI Agent (Autonomous)**<br>
    > Virtual Agent: **Flower_WholeSale**<br>

6. **Validate** and **Publish** the flow.
    ![Profiles](../graphics/Lab1_AI_Agent/14.10.gif)<br>

### Task 3. Test Webex AI Agent transfer to Webex AI Agent

Place a call to the number associated with your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>** channel and ask to speak with the **Wholesale department**. You will be connected to an AI agent who can assist you with ordering flowers if you need to purchase at least one box (each box contains 100 flowers). In this case, the price will be different. Below, you can find the screenshot of the knowledge base used by the **Flower_WholeSale** AI Agent.
![Profiles](../graphics/Lab1_AI_Agent/14.12.png)<br>

Or you can review the full configuration of the **Flower_Wholesale** AI Agent in the AI Agent Studio.
![Profiles](../graphics/Lab1_AI_Agent/14.14.png)<br>

For your reference, please see the chat discussion with the **Flower_WholeSale** AI Agent. This will help you have a similar dialogue during your test call.
![Profiles](../graphics/Lab1_AI_Agent/14.13.gif)<br>

In addition, similar to previous mission, you can check **Debug** tool and observe you test call.

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
