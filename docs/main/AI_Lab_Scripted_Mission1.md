---
#icon: material/folder-open-outline
icon: material/medal
---

🚨 **<span style="color: red;">Important Lab Dependency</span>**

This mission requires configuration created in the following missions:

1. **<span style="color: green;">NO DEPENDENCY</span>**

---

## Mission Details

 - Your mission is to create a new Scripted AI Agent from the template and configure basic Scripted AI Agent functionalities by adding intents and responses.

## Build

### Task 1. Creating a AI Agent using a Template

1.  Download the [Scripted Agent](https://drive.google.com/file/d/1IdGvd5CJ6zCcN1AA73cmpeSFQt4O99SB/view?usp=sharing){:target="\_blank"}.
    ![Profiles](../graphics/Lab1_AI_Agent/6.91.png)

2.  Login in to [Webex Control Hub](https://admin.webex.com){:target="\_blank"} by using your Admin profile **<span class="attendee-id-container">wxcclabs+admin_ID<span class="attendee-id-placeholder" data-prefix="wxcclabs+admin_ID" data-suffix="@gmail.com">Your_Attendee_ID</span>@gmail.com<span class="copy" title="Click to copy!"></span></span>**.

3.  Go to Contact Center from the left side navigation panel, and under Quick Links, click on **Webex AI Agent**.

    ![Profiles](../graphics/AI_Track/AI_Scripted_OpenWebexAI.gif)

4.  Click on **Import agent** to create a new AI Agent by importing preconfigured template. Click on **Upload** button, locate and select the **ScriptedAIAgent.json** you downloaded at the beginning of the mission.
5.  Name your Agent as **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_Scripted_AI_Agent">Your_Attendee_ID</span>_Scripted_AI_Agent<span class="copy" title="Click to copy!"></span></span>** and click **Import**.
6.  Make the bot live by clicking on **Save Changes** and then **Publish** button on top right.
7.  Enter **v1** in the popup comment window, then click **Publish**.
    ![Profiles](../graphics/Lab1_AI_Agent/5.1.gif)

8.  Click on the **Preview** button on the top right side to test the bot. Try the bot flow by typing **What are the store hours?**<span class="copy-static" data-copy-text="What are the store hours?"><span class="copy" title="Click to copy!"></span></span>. You will notice the following response:

    > **Sorry, I was unable to understand your query accurately.**

    ![Profiles](../graphics/Lab1_AI_Agent/6.1.png)

9.  The initial response can be customized, and we also need to configure intents and responses to enable the Scripted AI Agent to answer questions about store hours.

### Task 2. Update the initial greeting

1. As soon as the interaction reaches the Scripted AI Agent, the system initiates the **Welcome** response. To change the initial greeting, go to **Script** ⮕ **Responses** then open the **Welcome** response and update the response text there. Change the text to: **Hi, my name is Blossom, the virtual assistant. I can help you with tracking your order or providing the store's business hours.**<span class="copy-static" data-copy-text="Hi, my name is Blossom, the virtual assistant. I can help you with tracking your order or providing the store's business hours."><span class="copy" title="Click to copy!"></span></span></br>
   Do it for both **Web** and **Voice** channels. After the change, **Save** and **Publish** the Scripted AI agent.
   ![Profiles](../graphics/Lab1_AI_Agent/6.3.gif)

2. Click on the **Preview** button on the top right side to test the bot. Check if the initial greeting was changed.
   ![Profiles](../graphics/Lab1_AI_Agent/6.4.png)

### Task 3. Configure Scripted AI agent to answer questions about store hours.


**<details><summary>Good to Know: <span style="color: blue;">Understanding the Scripted AI Agent Flow.</span></summary>**

Once a customer asks a question, the AI engine and Natural Language Understanding (NLU) service tries to match it to an intent based on the training phrases. The intent is then configured with a response. After the customer receives the response, they can ask another question, and the same process applies. The AI engine and NLU match the customer’s query to an intent, which is configured with a response. Additionally, fulfillment can also be configured as part of the response. This is the basic flow concept of the Scripted AI Agent.<br>
    ![Profiles](../graphics/Lab1_AI_Agent/6.2.jpg)

</details>
  

1.  While on the **Script** configuration page, switch to **Intents** tab and click on the **Create Intent** button located in the top right corner.
2.  Add a new intent by providing the intent name as **store_hours**<span class="copy-static" data-copy-text="store_hours"><span class="copy" title="Click to copy!"></span></span> and include the following two utterances:

    > **What are the store hours?**<span class="copy-static" data-copy-text="What are the store hours?"><span class="copy" title="Click to copy!"></span></span><br>
    > **What is the business hours for this store?**<span class="copy-static" data-copy-text="What is the business hours for this store?"><span class="copy" title="Click to copy!"></span></span><br>

    ![Profiles](../graphics/Lab1_AI_Agent/6.4.gif)

3.  Click on the **Generate** button to utilize Generative AI for creating additional training phrases.

4.  Enter a description such as **Generate intents store business hours**<span class="copy-static" data-copy-text="Generate intents store business hours"><span class="copy" title="Click to copy!"></span></span> Set the Number of Variants to **10**, which will determine the number of new phrases to be generated. Click **Generate**.

    > Make a note of newly created **Utterances**.<br>
    
    ![Profiles](../graphics/Lab1_AI_Agent/6.5.gif)

5.  Now, we need to configure a response that would be related to this intent. Scroll down to **Response** and click ***Select a response*** drop down menu and click on **Create new**.
    ![Profiles](../graphics/Lab1_AI_Agent/6.6.gif)

6.  Name the response as **store_hours**<span class="copy-static" data-copy-text="store_hours"><span class="copy" title="Click to copy!"></span></span>. Update Variant 1 text to **The store hours are from 9 am to 5 pm. Please let me know if you have any other questions.**<span class="copy-static" data-copy-text="The store hours are from 9 am to 5 pm. Please let me know if you have any other questions."><span class="copy" title="Click to copy!"></span></span>.
    ![Profiles](../graphics/Lab1_AI_Agent/6.7.gif)

7.  Add one more Variant and provide the text: **The store is open from 9 am to 5 pm. Is there anything else I can do for you?**<span class="copy-static" data-copy-text="The store is open from 9 am to 5 pm. Is there anything else I can do for you?"><span class="copy" title="Click to copy!"></span></span>. Then click on **Create**.
    ![Profiles](../graphics/Lab1_AI_Agent/6.8.gif)

8.  Click on **Manage selected response** to add **Voice Channel**. Click on **"+"** next to **Default (web)** and select **Voice**.
    ![Profiles](../graphics/Lab1_AI_Agent/6.9.gif)

9. Configure **Voice Channel** with the same Variants and click on **Save**.</br>

    > **The store is open from 9 am to 5 pm. Is there anything else I can do for you?**<span class="copy-static" data-copy-text="The store is open from 9 am to 5 pm. Is there anything else I can do for you?"><span class="copy" title="Click to copy!"></span></span></br>
    > **The store hours are from 9 am to 5 pm. Please let me know if you have any other questions**.<span class="copy-static" data-copy-text="The store hours are from 9 am to 5 pm. Please let me know if you have any other questions"><span class="copy" title="Click to copy!"></span></span>

    ![Profiles](../graphics/Lab1_AI_Agent/6.10.gif)

10. After we added the response to our intent, we can complete the intent configuration. Click on **Add** on the right bottom corner. **Save changes** and **Publish** the Scripted AI Agent. Add publishing comment if required.
    ![Profiles](../graphics/Lab1_AI_Agent/6.11.gif)

11. Click on the **Preview** button on the top right side to test the bot. Try the bot flow by typing **What are the store hours?**<span class="copy-static" data-copy-text="What are the store hours?"><span class="copy" title="Click to copy!"></span></span>
    ![Profiles](../graphics/Lab1_AI_Agent/6.12.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
