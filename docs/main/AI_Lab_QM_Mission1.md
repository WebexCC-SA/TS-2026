---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 1: Configure flow to Evaluate the agents' answers.

## Mission overview

Your mission is to:

Create an Evaluation Form with requirements to ask the caller's name and the occasion for the flower purchase. Make test calls and, using the Supervisor Dashboard, evaluate if the agent asked these questions to the caller.

---

## Build

### Task 1. Create Evaluation form

1. In your browser, open **New Incognito Window** (need a new Desktop window to login as Supervisor).
   ![Profiles](../graphics/Lab1_AI_Agent/12.1.gif)

2. In this Incognito Window open up [https://alpha-desktop.wxcc-us1.cisco.com/](https://alpha-desktop.wxcc-us1.cisco.com/) .
   ![Profiles](../graphics/Lab1_AI_Agent/12.2.gif)

3. Login with your Supervisor credentials. In the **"Set your interaction preferences"** pop-up window, select Role as **Supervisor** and Handle calls using **Desktop**. Allow using microphone.
   ![Profiles](../graphics/Lab1_AI_Agent/12.3.gif)

4. Click on **Configurations** and then select to **Create a form**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.4.png)

5. In the Form title field enter **<copy><w class="attendee"></w>\_2000_Flower_Form</copy>**. In the Section name field enter **<copy>Initial_Questions</copy>**
   ![Profiles](../graphics/Lab1_AI_Agent/12.5.png)

6. Configure the first question with the following:<br>
   > Question: **<copy>Was the caller's name asked?</copy>**<br>
   > Context: **<copy>The agent needs to ask the caller's name every time the conversation starts.</copy>**<br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.6.png)

7. **Add question** and configure the second question with the following:<br>
   > Question: **<copy>Was the caller asked what the occasion for the flowers was?</copy>**<br>
   > Context: **<copy>The agent needs to ask the occasion for the flowers to better assist the customer.</copy>**<br>
   ![Profiles](../graphics/Lab1_AI_Agent/12.7.gif)

8. Scroll up and click on **Add assignment**. From the list of queues, select your queue **<copy><w class="attendee"></w>\_2000_Voice_Queue</copy>**. And click on **Assign**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.8.gif)

9. **Publish** the form.
   ![Profiles](../graphics/Lab1_AI_Agent/12.9.gif)

### Task 2. Evaluate agent using the Evaluation form

1. Go back to your non-incognito browser and check if your agent is still logged in. You might still be logged in after completing the AI Assistant lab. If not, please login to your agent desktop using your **Admin** account.
   ![Profiles](../graphics/Lab1_AI_Agent/12.10.png)

2. Place a test call to the number that is associated with your channel **<copy><w class="attendee"></w>\_2000_Voice_Queue</copy>** and ask to talk to the human agent. During the conversation, ask the caller's name but don't ask what the occasion of the flowers is.
   ![Profiles](../graphics/Lab1_AI_Agent/12.11.png)

3. Go back to your Supervisor Desktop in the Incognito Window ([https://alpha-desktop.wxcc-us1.cisco.com/interactions](https://alpha-desktop.wxcc-us1.cisco.com/)), click on **Interactions** and select **Completed**.
   ![Profiles](../graphics/Lab1_AI_Agent/12.12.png)

4. Find the **Customize** option and add **Automated evaluation** column.
   ![Profiles](../graphics/Lab1_AI_Agent/12.13.png)

5. Review your call and you should see the evaluation as 50%, as you only answered one of the two questions.
   ![Profiles](../graphics/Lab1_AI_Agent/12.14.png)

6. Click on **View** to see more details about the interaction and evaluation.
   ![Profiles](../graphics/Lab1_AI_Agent/12.15.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
