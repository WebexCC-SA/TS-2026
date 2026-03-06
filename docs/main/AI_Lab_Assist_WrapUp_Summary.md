---
#icon: material/folder-open-outline
icon: material/medal
---

## Feature Description

The Webex Contact Center **Wrap-up Summary AI** feature is part of the AI Assistant capabilities designed to enhance agent productivity and customer experience. This feature automatically generates the conversations summaries based on the interactions between the agent and the customer during a contact center session. It helps agents by summarizing the conversation and recommending next actions, reducing manual effort and improving accuracy in post-call documentation.

Benefits:

- **Reduced agent workload**: By automatically generating wrap-up codes and summarizing conversations, agents spend less time on manual documentation.<br/>
- **Improved accuracy**: The AI-generated summaries help ensure consistent and precise post-call records.<br/>
- **Enhanced customer satisfaction**: Thorough and accurate wrap-up improves follow-up actions and overall customer experience.<br/>
- **Increased agent efficiency**: Integration with other AI capabilities like virtual agent summaries and suggested responses helps agents work more effectively.<br/>
- **Recommended next actions**: The feature suggests follow-up steps, guiding agents on what to do after the interaction.<br/>

## Mission Details

Your mission is to:

1. Enable Wrap-up Summary feature.
2. Test Wrap-up Summary feature.

## Build

<span style="color: red;">[READ ONLY]</span>

### (Read Only) Task 1. Order Provisioning & Control Hub Settings

1. You should have the new AI Assistant SKU **A-FLEX-AI-ASST** from CCW provisioned in the tenant.

2. Once you have provisioned it, admins with the appropriate profile and access controls will be able to see the AI Assistant menu in Control Hub. From there, the customer can enable/disable the **Wrap-up summaries**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.45.png)

3. The Agent needs to logged in to the Team that is configured with Desktop Layout that has Agent Assistance features configured(**Note: Default desktop layout already incudes the AI Agent Assistance widget**). <br/>
   <br/>Agents Team:
   ![Profiles](../graphics/Lab1_AI_Agent/3.41.png)  
    <br/>Desktop Layout:
   ![Profiles](../graphics/Lab1_AI_Agent/3.43.png)

### Task 2. Test Wrap-up Summary feature

1. Make sure the agent is in the **Available** status.
   ![Profiles](../graphics/Lab1_AI_Agent/3.47.png)

2. Place a call to your channel. Answer the call with the agent and put the agent on mute if you are using a Webex phone to place the call, as we use one microphone for both the caller and agent. As the customer say that you ordered flowers but didn't receive a delivery.
   ![Profiles](../graphics/Lab1_AI_Agent/3.49.png)

3. Disconnect the call. You should see the wrap up summery of the call.
   ![Profiles](../graphics/Lab1_AI_Agent/3.50.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
