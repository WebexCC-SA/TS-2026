---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 3: Send Custom data to Autonomous AI Agent

Passing custom data feature is now available for autonomous AI agents. This feature enhances the end-user experience and provides you with greater control over voice conversations. With this feature, developers can send a JSON payload from the WXCC flow directly to the autonomous AI agent at the start of each session. You can use this payload to customize agent behavior for each customer or to pass information from the flow that the AI agent needs.

The custom data sent to the AI Agent can be accessed in the agent's goals, instructions, welcome message, actions, or slots using the syntax {{variable}} in the Webex AI Agent studio application.

## Mission overview

Your mission is to:

Customize the Welcome message by sending custom data from the Voice flow to AI Agent.

---

## Build

### Task 1. Configure Voice Flow to send custom data to AI agent

1. Make sure you are in **Edit** mode of the flow. Click on the **VirtualAgentV2** node and open up the **State Event** option.
   ![Profiles](../graphics/Lab1_AI_Agent/13.1.gif)

2. Enter the following JSON data to the **Event Data** field: **<copy>{"customer_name": "dear customer"}</copy>**. Make sure you paste the JSON data to the **Event Data** but not to the **Event Name**.
   ![Profiles](../graphics/Lab1_AI_Agent/13.2.gif)

3. **Validate** and **Publish** the flow using the **Latest** tag.
   ![Profiles](../graphics/Lab1_AI_Agent/13.3.gif)

### Task 2. Configure AI Agent with the custom data from the Voice Flow

1. Open up your AI Agent **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/13.4.gif)

2. In the **Welcome message** replace "there" with **<copy>{{customer_name}}</copy>**. In this case we expect that the caller will hear: "Hi **dear customer**, my name is Blossom, the AI Agent. How can I assist you?"
   ![Profiles](../graphics/Lab1_AI_Agent/13.5.gif)

3. **Save changes** and **Publish** the AI Agent.
   ![Profiles](../graphics/Lab1_AI_Agent/13.6.gif)

4. Place the test call to the number that is associated with your Channel **<copy><w class="attendee"></w>\_2000_Channel</copy>**, and check if you hear the custom message.

5. Confirm the expected behavior by reviewing the **Session** transcripts.
   ![Profiles](../graphics/Lab1_AI_Agent/13.7.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
