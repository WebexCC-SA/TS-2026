---
#icon: material/folder-open-outline
icon: material/medal
---

## Mission Details

Your mission is to configure intents, entities, and responses to check the status of an existing order that you created in the **Autonomous AI Agent** lab. In the next **Mission 4**, you will configure Fulfillment for this order tracking flow.

## Build

### Task 1. Test the Order tracking flow

1. Click on the **Preview** button on the top right side to test the bot. Try the bot flow by typing **_<copy>I want to track my order</copy>_**. You will see that the Scripted AI agent is not yet configured to assist with this task.
   ![Profiles](../graphics/Lab1_AI_Agent/6.14.png)

### Task 2. Configure intents, entities, and responses

1. While on the **Script** configuration page, switch to **Entities** tab and click on the **Create entity** option. Provide the name as **<copy>order_number</copy>**. Entity type select as **Digits**. Provide **Length** as **2**.
   ![Profiles](../graphics/Lab1_AI_Agent/6.17.gif)

2. While on the **Script** configuration page, switch to **Intents** tab and click on the **Create Intent** button located in the top right corner.
3. Add a new intent by providing the intent name as **_<copy>track_order</copy>_** and include the following two utterances:

   > **_<copy>I want to track my order</copy>_**
   > **_<copy>What is my order status?</copy>_**

   ![Profiles](../graphics/Lab1_AI_Agent/6.15.gif)

4. Click on the **Generate** button to utilize Generative AI for creating additional training phrases.

5. Enter a description such as **_<copy>Generate intents to track an order status</copy>_** . Set the Number of Variants to **10**, which will determine the number of new phrases to be generated.
   ![Profiles](../graphics/Lab1_AI_Agent/6.16.gif)

6. Click on **+ Link** and add **order_number** as an entity. Make it as **Required**. Click on the **Response** search and select **order_number** response.
   ![Profiles](../graphics/Lab1_AI_Agent/6.19.gif)

7. You can review it later, but for your information, the **order_number** response was preconfigured for you for this lab. In this response, the AI agent simply asks for the order number. Refer to the picture below. This is an interim response needed to fill the entity.
   ![Profiles](../graphics/Lab1_AI_Agent/6.20.png)

8. Scroll down and click on **Create new** response.
   ![Profiles](../graphics/Lab1_AI_Agent/6.21.gif)

9. Name the response as **_<copy>track_order</copy>_**. Update variant 1 test to **_<copy>Please wait while I check the order status.</copy>_**
   ![Profiles](../graphics/Lab1_AI_Agent/6.22.gif)

10. Add **Voice Channel**.
    ![Profiles](../graphics/Lab1_AI_Agent/6.23.gif)

11. Configure **Voice Channel** with the same variants and click on **Create**. </br>

    > **_<copy>Please wait while I check the order status.</copy>_**

    ![Profiles](../graphics/Lab1_AI_Agent/6.24.gif)

12. Now after we added the response to our intent we can complete the intent configuration. Click on **Add** on the right bottom corner. **Save** and **Publish** the Scripted AI Agent.
    ![Profiles](../graphics/Lab1_AI_Agent/6.25.gif)

13. Click on the **Preview** button on the top right side to test the bot. Try the bot flow by typing **_<copy>I would like to track my order</copy>_** and provide an order number that you created earlier. The AI agent will not respond with actual order status but it will provide the interim message.  
    ![Profiles](../graphics/Lab1_AI_Agent/6.26.png)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
