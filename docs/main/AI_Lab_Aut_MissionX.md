---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 2: Integrating the AI Agent with Flow for Voice Calls

## Mission overview

Your mission is to:

Integrate the AI Agent with the Voice Flow.

### Task 1. Build WxCC voice flow with AI Agent.

1. In Control Hub navigate to **Flows**, click on **Manage Flows** dropdown list and select **Create Flows**. Select **Start Fresh**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.47.gif)

2. Name the new flow **<copy>AutonomousAI*Flow_2000*<w class="attendee"></w></copy>** and click on **Create Flow**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.48.png)

3. Make sure the **Edit** mode at the top is set to **ON**. Then, drag and drop the **Virtual Agent V2** and **Disconnect Contact** activities from the left panel onto the Design field.

   !!! Note
   Please make sure to use **VirtualAgentV2** activity and <span style="color: red;">**NOT**</span> **VirtualAgent** also present on the Activity Library for Backward Compatibility.

   > Connect the **New Phone Contact** output node edge to this **VirtualAgentV2** node.
   >
   > Connect the Handled outputs to **DisconnectContact**.
   >
   > Connect the Errored outputs to **DisconnectContact**.
   >
   > Click on **VirtulaAgentV2** block and select **Static Contact Center AI Config**.
   >
   > Select Contact Center AI Config as **Webex AI Agent (Autonomous)**.
   >
   > Virtual Agent: **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>**

[Profiles](../graphics/Lab1_AI_Agent/2.49.gif)

4. Drag and drop **Queue Contact** and **Play Music** nodes. Configure them as the following:
   - **Queue Contact**

     > Connect the **Escalated** path from the **Virtual Agent V2** activity to the **Queue Contact** activity.
     >
     > Connect the **Queue Contact** activity to the **Play Music** activity.
     >
     > Connect the **Failure** path from the **Queue Contact** activity to the **Disconnect Contact** activity.
     >
     > Click on **Queue Contact** node and select **Static Queue**.
     >
     > Queue name: **<copy><w class="attendee"></w>\_2000_Voice_Queue</copy>**

   - **Play Music**

     > Create a loop by connecting the Play Music activity back to itself - to create a music loop, following the example provided below.
     >
     > Connect the **Failure** path from the **Play Music** activity to the **Disconnect Contact** activity.
     >
     > Click on the **Play Music** node and select Music File: **defaultmusic_on_hold_cisco_opus_no_1.wav**.
     >
     > ![Profiles](../graphics/Lab1_AI_Agent/2.50.gif)

5. **Validate** and **Publish** Flow. In the popped up window, click on dropdown menu to select **Latest** label (**DO NOT** Select any other tag but only **Latest**), then click **Publish**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.51.gif)

6. Assign the Flow to your **Channel (Entry Point)**. Do this by first going to **Channels** and search for your channel **<copy><w class="attendee"></w>\_2000_Channel</copy>**.
7. Click on **<copy><w class="attendee"></w>\_2000_Channel</copy>**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.52.png)
8. In **Channel** settings section, change the following and then **Save** the changes.<br/>
Routing Flow: **<copy>AutonomousAI*Flow_2000*<w class="attendee"></w></copy>**<br/>
Version Label: **Latest**<br/>
   ![Profiles](../graphics/Lab1_AI_Agent/2.53.gif)
9. Dial the support number assigned to your **<w class="attendee"></w>\_2000_Channel** to test the Autonomous AI Agent over a voice call.
   ![Profiles](../graphics/Lab1_AI_Agent/2.84.png)

### Task 2. Test Agent Handoff Configurations

1. Go to **Control Hub** and from **Overview > Quick Links**, select **Desktop** option.
   ![Profiles](../graphics/Lab1_AI_Agent/2.83.gif)
2. Select **Desktop** endpoint option and choose the team **<copy><w class="attendee"></w>\_2000_Team</copy>**. Click **Submit**. Allow browser to access Microphone by clicking **Allow** on every visit.
3. Make your agent **_Available_** and you're ready to make a call.
   ![profiles](../graphics/Lab1_AI_Agent/5-Agent_Login.gif)

4. Dial the support number assigned to your **<w class="attendee"></w>\_2000_Channel** channel, and during the conversation with the AI agent, ask to **talk to a representative or live agent**.

5. By default, the **Conversation Transcripts** setting is enabled in VirtualAgentV2 block.
   ![Profiles](../graphics/Lab1_AI_Agent/2.54.png)

6. With this setting enabled, the live agent can see the conversation details between the caller and the AI agent. Please check if you can view the IVR transcripts during your test calls with Agent Handoff.
   ![Profiles](../graphics/Lab1_AI_Agent/2.55.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed the Autonomous AI Agent lab! 🎉🎉 </strong></p>
