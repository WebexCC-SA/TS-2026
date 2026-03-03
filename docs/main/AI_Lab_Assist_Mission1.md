---
#icon: material/folder-open-outline
icon: material/medal
---

## Feature Description

AI Agent Transfer Summary enhances agent efficiency and elevate customer experiences.

When a customer calls the contact center and interacts with an AI Agent, they may request to speak with a live human agent at some point during the conversation. Once connected to an agent, it is important for the agent to receive a concise summary of the customer's interaction with the AI Agent. This summary provides the agent with a quick overview of the customer's call reason. The **AI Agent Handoff Summary** feature provides this summary, displaying it on the agent's desktop within the AI-Assistant Widget.

## Mission Details

Your mission is to:

1. Configure a smooth handoff to live human agent from AI Agent.
2. Create a summary of Virtual Agent transcript to be provided during handoff.
3. Use AI Assistant widget as an Agent.

## Build

<span style="color: red;">[READ ONLY]</span>

### (Read Only) Task 1. Order Provisioning & Control Hub Settings

1. You should have the new AI Assistant SKU **A-FLEX-AI-ASST** from CCW provisioned in the tenant.

2. Once you have provisioned it, admins with the appropriate profile and access controls will be able to see the AI Assistant menu in Control Hub. From there, the customer can enable/disable the **Virtual Agent Transfer Summary** feature from the Control Hub.
   ![Profiles](../graphics/Lab1_AI_Agent/3.1.png)

3. The Agent needs to be logged in to the Team that is configured with Desktop Layout that has "ai-assistant" features configured
   (**Note: Default desktop layout already incudes the AI Agent Assistance widget**). <br/>
   <br/>Agents Team:
   ![Profiles](../graphics/Lab1_AI_Agent/3.41.png)  
    <br/>Desktop Layout:
   ![Profiles](../graphics/Lab1_AI_Agent/3.43.png)
   <br/><br/>Desktop Layout file: Make sure **ai-assistant** is configured under the **advancedHeader** in case you are using a custom Layout file.
   ![Profiles](../graphics/Lab1_AI_Agent/3.5.png)
   <br/>You can download a preconfigured desktop layout from here. <br/>
   [Desktop Layout](https://drive.google.com/file/d/1EnM-2r9XOVm2EcE6ND4fL3L62qZesm5_/view?usp=sharing){:target="\_blank"}

### Task 2. Test Agent Transfer Summary Feature

1. Login to the **Agent Desktop** with your Admin user.
   ![Profiles](../graphics/Lab1_AI_Agent/3.39.png)

2. Select **Desktop** as telephony option.
   ![Profiles](../graphics/Lab1_AI_Agent/3.44.png)

3. Make sure you can see the **Agent Assistant** widget.
   ![Profiles](../graphics/Lab1_AI_Agent/3.6.png)

4. Place a test call to the number that is associated with you Channel **<w class="attendee"></w>\_2000_Channel**, and, for example, mention that you need some flowers for a wedding party. **Allow the AI Agent to complete its response before requesting to transfer the call to a live human agent**. Then ask the AI Agent to transfer you to the human agent.

5. Become **Available** on the Agent Desktop and answer the call. You will see a window with the message **"AI agent transfer summary is ready"** pop up. You can click on **View Summary** from the window.
   ![Profiles](../graphics/Lab1_AI_Agent/3.8.png)

6. The **AI agent transfer summary is ready** notification will disappear after a few seconds. However, you can always reopen it by clicking on the AI Assistant widget.
   ![Profiles](../graphics/Lab1_AI_Agent/3.9.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
