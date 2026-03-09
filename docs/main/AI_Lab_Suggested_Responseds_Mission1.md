---
#icon: material/folder-open-outline
icon: material/medal
---


🚨 **<span style="color: red;">Important Lab Dependency</span>**

 This mission requires configuration created in the following missions:

 - **[AI Agent Track ⮕ Mission 1 – Create AI Autonomous Agent**](../AI_Lab_Aut_Mission1/)<br>
 - **[AI Agent Track ⮕ Mission 2 – Integrating the AI Agent with Flow for Voice Calls](../AI_Lab_Aut_Mission1/)**

 If these missions were not completed, some steps in current mission will not function correctly.

## Mission overview

Your mission is to:

 - Create a Knowledge Base for the AI Assistant skill to use. This Knowledge Base will contain documents that provide the necessary information for the AI Assistant to knowledgeably provide suggestions to the agent.

---

## Build

### Task 1. Create Knowledge Base

1. Download the .xlsx file [Flowrs_Catalog](https://docs.google.com/spreadsheets/d/1A5d1ZEPWmPE_38Bi8bVULKLhCH0wyGX4/edit?usp=sharing&ouid=100862210011127627593&rtpof=true&sd=true){:target="\_blank"}.
   > **Flower_Catalog.xlsx** - file contains information on the available single flowers and bouquets, including the price of the flowers or bouquets and occasions that suit the flowers.
   ![Profiles](../graphics/Lab1_AI_Agent/2.74.png)

    !!! Note
        This is same file that used for the [AI Agent Track: Mission 1 – Create AI Autonomous Agent**](../AI_Lab_Aut_Mission1/). You can skip this step if you already completed that mission.<br>

2. From **Control Hub**, go to Contact Center and open **Webex AI Agent Studio** portal.
   ![Profiles](../graphics/Lab1_AI_Agent/9.1.png)

3. Select **Knowledge** and click on **Create Knowledge base**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.2.png)

4. Provide the name as **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Suggested_Responses_Knowledge">Your_Attendee_ID</span>_Suggested_Responses_Knowledge<span class="copy" title="Click to copy!"></span></span>** and click on **Create**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.3.png)

5. Add **Flower_Catalog** file downloaded in step 1.
   ![Profiles](../graphics/Lab1_AI_Agent/9.4.png)

6. Click on **Process** the file.
   ![Profiles](../graphics/Lab1_AI_Agent/9.5.png)

### Task 2. Create AI Assistant skills

1. Now, select **AI Assistant skills** and click on **Create skills**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.6.png)

2. Select **Start from scratch** and click **Next**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.7.gif)

3. Name the skill as **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Suggested_Responses_Skill">Your_Attendee_ID</span>_Suggested_Responses_Skill<span class="copy" title="Click to copy!"></span></span>**. Add the following text into the **Goal** section **<span class="copy-static" data-copy-text="Answer question about flower suggestion, flower availability, prices, delivery cost and order status."><span class="copy" title="Click to copy!"></span></span>. And then click on **Create**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.8.gif)

4. Link your knowledge base **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Suggested_Responses_Knowledge">Your_Attendee_ID</span>_Suggested_Responses_Knowledge<span class="copy" title="Click to copy!"></span></span>** to the skill in the **Knowledge** section. **Save** and **Publish** the changes.
   ![Profiles](../graphics/Lab1_AI_Agent/9.9.gif)

### Task 3. Assign AI skills to your queue

1. Switch to Webex Control Hub, go to Contact Center, scroll down until you see the **AI Assistant** module. Open it and scroll down to the **Real-Time Assist** feature. 

2. Click on Assign AI Assistant skills. In the following window, select the skill that you created in the previous task, **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Suggested_Responses_Skill">Your_Attendee_ID</span>_Suggested_Responses_Skill<span class="copy" title="Click to copy!"></span></span>**, and add your queue **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy" title="Click to copy!"></span></span>**. Then click **Save**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.10.gif)

### Add "Start Media Stream" block to the voice flow

1. In the Webex Control hub, find and open your flow **<span class="attendee-id-container">AutonomousAIFlow_2000_<span class="attendee-id-placeholder" data-prefix="AutonomousAIFlow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.11.gif)


2. Click on **Edit** and select **Event Flows**.
   ![Profiles](../graphics/Lab1_AI_Agent/9.12.gif)

3. Drag and drop **Start Media Stream** node and connect **AgentAnswer** node to the **Start Media Stream** node. 
4. Drag and drop **End Flow** node and connect **Start Media Stream** to **End Flow**.
5. Validate and publish the flow:

    > - Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > - If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > - In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

   ![Profiles](../graphics/Lab1_AI_Agent/9.13.png)

### Task 5. Test Real-Time Assist Feature

1. Switch to Control Hub to assign the Flow to your **Channel (Entry Point)**. Go to **Channels**, search for your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
7. Click on **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Channel**
8. In **Entry Point** settings section change the following, then click **Save** button:

    > - Routing flow: **<span class="attendee-id-container">AutonomousAIFlow_2000_<span class="attendee-id-placeholder" data-prefix="AutonomousAIFlow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>**
    >
    > - Music on hold: **defaultmusic_on_hold.wav**
    >
    > - Version label: **Latest**

    ![profiles](../graphics/Lab1/4-ChannelCreation.gif.gif)

2. Your Agent Desktop session should still be active. If it is not, launch **Desktop** using the cross-launch link in **Control Hub**.

    **<details><summary>See how to run Agent Desktop from the Control Hub</summary>**

    ![Profiles](../graphics/Lab1/RunAgentDesktop.gif)

    </details>

3. Make your agent **Available** and you're ready to make a call.
   ![Profiles](../graphics/Lab1_AI_Agent/3.15.png)

4. Place the test call to the number that is associated with your **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**. 

5. Once the call is connected to your Agent Desktop, click on the **AI Assistant** module. You will see the option **Get Suggestion**. Click on it and try to order some flowers. You should see that the AI Agent will suggest flower availability and prices to the human agent based on the Knowledge Base.
   ![Profiles](../graphics/Lab1_AI_Agent/9.14a.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
