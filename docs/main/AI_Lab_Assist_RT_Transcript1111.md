---
#icon: material/folder-open-outline
icon: material/medal
---

## Feature Description

You can enhance communication efficiency and quality assurance in your contact center with the the **real-time transcription** feature. It allows agents to access real-time transcriptions of customer interactions directly on their Agent Desktop, enabling them to follow conversations more accurately and respond effectively.

Benefits:

- **Accurate communication**: Captures conversations precisely, aiding understanding, especially with diverse accents or non-native speakers. <br/>
- **Improved efficiency**: Eliminates manual note-taking, enabling agents to focus and resolve issues faster.<br/>
- **Better performance**: Helps agents deliver timely, accurate solutions boosting customer trust.<br/>
- **Higher customer satisfaction**: Reduces misunderstandings, improving CSAT scores and experience.<br/>
- **Training and quality assurance**: Provides reliable references for coaching, evaluations, and compliance checks.<br/>
- **Seamless integration**: Easily integrates with systems, optimizing queue-level management.<br/>
- **AI support**: Enhances decision-making with complementary AI Assistant features.<br/>

## Mission Details

Your mission is to:

1. Enable **Real-Time Transcription** feature.
2. Configure the **Start Media Stream** block in your flow.
3. Test Real-Time Transcription feature in the Agent Desktop.

## Build

<span style="color: red;">[READ ONLY]</span>

### (Read Only) Task 1. Order Provisioning & Control Hub Settings

1. You should have the new AI Assistant SKU **A-FLEX-AI-ASST** from CCW provisioned in the tenant.

2. Once you have provisioned it, admins with the appropriate profile and access controls will be able to see the AI Assistant menu in Control Hub. From there, the customer can enable/disable the **Real-time Transcriptions** feature from the Control Hub.
   ![Profiles](../graphics/Lab1_AI_Agent/3.10.png)

3. The Agent needs to logged in to the Team that is configured with Desktop Layout that has Agent Assistance features configured (**Note: Default desktop layout already incudes the AI Agent Assistance widget**). <br/>
   <br/>Agents Team:
   ![Profiles](../graphics/Lab1_AI_Agent/3.41.png)  
    <br/>Desktop Layout:
   ![Profiles](../graphics/Lab1_AI_Agent/3.43.png)
   <br/><br/>Desktop Layout file: Make sure **RT_TRANSCRIPT** widget is configured.
   ![Profiles](../graphics/Lab1_AI_Agent/3.11.png)
   <br/>You can download a preconfigured desktop layout here.<br/>
   [Desktop Layout](https://drive.google.com/file/d/1EnM-2r9XOVm2EcE6ND4fL3L62qZesm5_/view?usp=sharing){:target="\_blank"}

### Task 2. Configure Flow for real-time transcription

1. Open up your voice flow **<copy>AutonomousAI*Flow_2000*<w class="attendee"></w></copy>** and click on **Edit**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.12.gif)

2. Click on the **Event Flows**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.13.gif)

3. Drag and drop the **Start Media Stream** node and connect the **AgentAnswer** node to the **Start Media Stream** node.
4. Drag and drop the **End Flow** node and connect the **Start Media Stream** to **End Flow**.
5. **Validate** and **Publish** the flow.
   ![Profiles](../graphics/Lab1_AI_Agent/3.14.gif)

### Task 3. Test Real-Time Transcription feature in the Agent Desktop

1. Make your agent **Available**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.15.png)

2. Place the test call to the number that is associated with you Channel **<w class="attendee"></w>\_2000_Channel**, and ask to talk to an agent.

3. Answer the call. You will see the **Live Transcript** window with the latest live transcripts between the caller and the human agent.
   ![Profiles](../graphics/Lab1_AI_Agent/3.16.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
