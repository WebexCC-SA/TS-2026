---
#icon: material/folder-open-outline
icon: material/medal
---

## Feature Description

Customers find it frustrating to repeat themselves, especially after a call drop. Now, agents can pick up where the call left off, reducing frustration and handling time, while empowering agents to work more efficiently.

The Cisco AI Assistant provides a summary of the recently dropped interaction, detailing the reason for the call and the last action discussed. This enables agents to seamlessly resume the conversation.

## Mission Details

Your mission is to:

1. Understand how **Call Drop Summary** feature is enabled.
2. Test **Call Drop Summary** feature.

## Build

<span style="color: red;">[READ ONLY]</span>

### (Read Only) Task 1. Order Provisioning & Control Hub Settings

1. You should have the new AI Assistant SKU **A-FLEX-AI-ASST** from CCW provisioned in the tenant.

2. Once you have provisioned it, admins with the appropriate profile and access controls will be able to see the AI Assistant menu in Control Hub. From there, the customer can enable/disable the **Call Drop Summaries** features from the Control Hub.
   ![Profiles](../graphics/Lab1_AI_Agent/3.18.png)

3. The Agent needs to logged in to the Team that is configured with Desktop Layout that has Agent Assistance features configured (**Note: Default desktop layout already incudes the AI Agent Assistance widget**). <br/>
   <br/>Agents Team:
   ![Profiles](../graphics/Lab1_AI_Agent/3.41.png)  
    <br/>Desktop Layout:
   ![Profiles](../graphics/Lab1_AI_Agent/3.43.png)
   <br/>Desktop Layout file: Make sure **ai-assistant** is configured under the **advancedHeader**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.5.png)
   <br/>You can download a preconfigured desktop layout here.<br/>
   [Desktop Layout](https://drive.google.com/file/d/1EnM-2r9XOVm2EcE6ND4fL3L62qZesm5_/view?usp=sharing){:target="\_blank"}

### Task 2. Test Call Drop Summary Feature

1. Make sure the agent is in the **Available** status.
   ![Profiles](../graphics/Lab1_AI_Agent/3.15.png)

2. Place the test call to the number that is associated with you Channel **<w class="attendee"></w>\_2000_Channel**, and ask to talk to an agent.

3. Stay on the call for 35 - 45 seconds, as a customer ask questions such as that you want to order flowers for a friend.

4. After 35-45 seconds, end the call from the customer side.
   ![Profiles](../graphics/Lab1_AI_Agent/3.19.png)

5. Call back from the same number. Ask to talk to an agent.

6. Make sure you are **Available** on the Agent Desktop and answer the call. You will see AI Assistant Widget will have Call Drop Summary and the Agent Transfer Summary.
   ![Profiles](../graphics/Lab1_AI_Agent/3.20.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
