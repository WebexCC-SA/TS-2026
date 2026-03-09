---
#icon: material/folder-open-outline
icon: material/medal
---

🚨 **<span style="color: red;">Important Lab Dependency</span>**

This mission requires configuration created in the following missions:

1. **[Core Track: Mission 1 - Basic Call Routing (Flow Template, TTS, Language)](../CoreTrack_Mission1/)**<br>

If this mission was not completed, some steps in current mission will not function correctly.

## Mission overview

Your mission is to:

 - Create an Evaluation Form with requirements to ask the caller's name and the occasion for the flower purchase. Make test calls and, using the Supervisor Dashboard, evaluate if the agent asked these questions to the caller.

---

## Build

### Create Evaluation form

1. In your browser, open **New Incognito Window** (need a new Desktop window to login as Supervisor).
   ![Profiles](../graphics/Lab1_AI_Agent/12.1.gif)

2. In this Incognito Window open up **<span style="color: blue;">https://desktop.wxcc-us1.cisco.com/</span>**<span class="copy-static" data-copy-text="https://desktop.wxcc-us1.cisco.com/"><span class="copy" title="Click to copy!"></span></span>.
   ![Profiles](../graphics/Lab1_AI_Agent/12.2.gif)

3. Login with your Supervisor user **<span class="attendee-id-container">wxcclabs+supvr_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+supvr_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy" title="Click to copy!"></span></span>**. Password is the same as for your Admin user.


4. In the **"Set your interaction preferences"** pop-up window, select Role as **Supervisor** and Handle calls using **Desktop**. Allow using microphone.
   ![Profiles](../graphics/Lab1_AI_Agent/12.3.gif)<br>

5. Click on **Configurations** and then select to **Create a form**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.4.png)<br>

6. In the **Form title** field enter **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Flower_Form">Your_Attendee_ID</span>_Flower_Form<span class="copy" title="Click to copy!"></span></span>**. In the Section name field enter **<copy>Initial_Questions</copy>**
   ![Profiles](../graphics/Lab1_AI_Agent/12.5.png)<br>

7. Configure the first question with the following:
   > Question: **Was the caller's name asked?**<span class="copy-static" data-copy-text="Was the caller's name asked?"><span class="copy" title="Click to copy!"></span></span><br>
   > Context: **The agent needs to ask the caller's name every time the conversation starts.**<span class="copy-static" data-copy-text="The agent needs to ask the caller's name every time the conversation starts."><span class="copy" title="Click to copy!"></span></span><br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.6.png)<br>

8. Click **Add question** and configure the second question with the following:<br>
   > Question: **Was the caller asked what the occasion for the flowers was?**<span class="copy-static" data-copy-text="Was the caller asked what the occasion for the flowers was?"><span class="copy" title="Click to copy!"></span></span><br>
   > Context: **The agent needs to ask the occasion for the flowers to better assist the customer.**<span class="copy-static" data-copy-text="The agent needs to ask the occasion for the flowers to better assist the customer."><span class="copy" title="Click to copy!"></span></span><br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.7.gif)<br>

9. Scroll up and click on **Add assignment**. From the list of queues, select your queue **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Queue">Your_Attendee_ID</span>_Queue<span class="copy" title="Click to copy!"></span></span>**. And click on **Assign**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.8.gif)<br>

10. **Publish** the form.
   ![Profiles](../graphics/Lab1_AI_Agent/12.9.gif)<br>

### Evaluate agent using the Evaluation form

1. Return to Control Hub to assign the Flow to your **Channel (Entry Point)**. Go to **Channels**, search for your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**
2. Click on **<span class="attendee-id-placeholder">Your_Attendee_ID</span>_Channel**
3. In **Entry Point** settings section change the following, then click **Save** button:

    > - Routing flow: **Main_Flow_<span class="attendee-id-placeholder">Your_Attendee_ID</span>**
    >
    > - Music on hold: **defaultmusic_on_hold.wav**
    >
    > - Version label: **Latest**

    ![profiles](../graphics/Lab1/4-ChannelCreation.gif.gif)

4. Go back to your **non-incognito browser**. Your Agent Desktop session should still be active. If it is not, launch **Desktop** using the cross-launch link in **Control Hub**.

    **<details><summary>See how to run Agent Desktop from the Control Hub</summary>**

    ![Profiles](../graphics/Lab1/RunAgentDesktop.gif)

    </details>

5. Make your agent **Available** and you're ready to make a call.
   ![Profiles](../graphics/Lab1_AI_Agent/3.15.png)

6. Place a test call to the number that is associated with your channel **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Channel">Your_Attendee_ID</span>_Channel<span class="copy" title="Click to copy!"></span></span>**. During the conversation, ask the caller's name but don't ask what the occasion of the flowers is. 
   ![Profiles](../graphics/Lab1_AI_Agent/12.11.png)<br>

7. Complete the call.

8. Switch back to your **Supervisor Desktop** in the Incognito Window (**<span style="color: blue;">https://desktop.wxcc-us1.cisco.com/</span>**<span class="copy-static" data-copy-text="https://desktop.wxcc-us1.cisco.com/"><span class="copy" title="Click to copy!"></span></span>), click on **Interactions** and select **Completed**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.12.png)<br>

8. Find the **Customize** option and add **Automated evaluation** column.
   ![Profiles](../graphics/Lab1_AI_Agent/12.13.png)<br>

9. Review your call and you should see the evaluation as 50%, as you only answered one of the two questions.
   ![Profiles](../graphics/Lab1_AI_Agent/12.14.png)<br>

10. Click on **View** to see more details about the interaction and evaluation.
   ![Profiles](../graphics/Lab1_AI_Agent/12.15.gif)<br>

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
