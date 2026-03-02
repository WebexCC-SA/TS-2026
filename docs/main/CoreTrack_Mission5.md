---
#icon: material/folder-open-outline
icon: material/medal
---
## Feature Description

You can enhance communication efficiency and quality assurance in your contact center with the real-time transcripts feature. It allows agents to access real-time transcriptions of customer interactions directly on their Agent Desktop, enabling them to follow conversations more accurately and respond effectively.

### Benefits

- **Accurate communication**: Captures conversations precisely, aiding understanding, especially with diverse accents or non-native speakers. <br/>
- **Improved efficiency**: Eliminates manual note-taking, enabling agents to focus and resolve issues faster.<br/>
- **Better performance**: Helps agents deliver timely, accurate solutions, boosting customer trust.<br/>
- **Higher customer satisfaction**: Reduces misunderstandings, improving CSAT scores and experiences.<br/>
- **Training and quality assurance**: Provides reliable references for coaching, evaluations, and compliance checks.<br/>
- **Seamless integration**: Easily integrates with systems, optimizing queue-level management.<br/>
- **AI support**: Enhances decision-making with complementary AI Assistant features.<br/>


### Mission Details

Your mission is to:

1. Verify Real-Time Transcript feature configuration
2. Configure flow with **Start Media Stream** functionality
3. Test Real-Time Transcript feature


## Verify feature configuration

1. Switch to Control Hub and navigate to **AI Assistant** under Desktop Experience section. Make sure **Real-time Transcriptions** feature is turned on. 

    ![Profiles](../graphics/Lab1_AI_Agent/3.10.png)
    
2. The agent’s team has been preconfigured with the Global Layout, which already includes the AI Assistant functionality. You can verify it visiting the following configuration pages in Control Hub:<br/>
   <br/><br/>a. Contact Center -> Teams (under User Management section) -> search for your team **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Team">Your_Attendee_ID</span>_Team<span class="copy" title="Click to copy!"></span></span>**
   ![Profiles](../graphics/Lab1_AI_Agent/3.41.png)    
   <br/><br/>b. Contact Center -> Desktop Layout (under Desktop Expirience section) -> search for **Global Layout**
   ![Profiles](../graphics/Lab1_AI_Agent/3.43.png) 
   <br/><br/>c. Click **Download default desktop layout**.  Make sure **RT_TRANSCRIPT** widget is configured. 
   ![Profiles](../graphics/Lab1_AI_Agent/3.11.png) 
   <br/><br/>Or you can download preconfigured desktop layout here:
   [Desktop Layout](https://drive.google.com/file/d/1EnM-2r9XOVm2EcE6ND4fL3L62qZesm5_/view?usp=sharing){:target="_blank"} 
   </details>


## Build

1. Open up your voice flow <span class="attendee-id-container">**Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and click on **Edit**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.12.gif) 

2. Click on the **Event Flow**.
3. Drag and drop **Start Media Stream** node and connect **AgentAnswer** node to the **Start Media Stream** node. 
4. Drag and drop **End Flow** node and connect **Start Media Stream** to **End Flow**.
5. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.
   
   ![Profiles](../graphics/Lab1_AI_Agent/3.13.gif)

## Test Real-Time Transcript feature

1. Make your agent **Available**.
   ![Profiles](../graphics/Lab1_AI_Agent/3.15.png)

2. Place the test call to the number that is associated with your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**, and ask to talk to an agent. 

3. Answer the call and begin speaking. The Live Transcripts panel will display the most recent real-time transcript of the conversation between the caller and the agent.
   ![Profiles](../graphics/Lab1_AI_Agent/3.16.png)

---
<p style="text-align:center"><strong>Congratulations, you have succesfully completed Adding Real-Time Transcript mission! 🎉🎉 </strong></p>
