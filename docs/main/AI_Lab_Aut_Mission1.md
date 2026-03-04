---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 1: Create AI Autonomous Agent

## Mission overview

Your mission is to:

**Create an AI agent and upload the knowledge base (KB)** to enable the agent to provide answers about available flowers and assist customers with creating an order or transferring the interaction to a human agent.
![Profiles](<../graphics/Lab1_AI_Agent/Untitled(9).jpg>)

---

## Build

### Task 1. Create a new AI Agent with Knowladge Base

1. Download the .xlsx file [Flowrs_Catalog](https://docs.google.com/spreadsheets/d/1A5d1ZEPWmPE_38Bi8bVULKLhCH0wyGX4/edit?usp=sharing&ouid=100862210011127627593&rtpof=true&sd=true){:target="\_blank"}.
   > **Flower_Catalog.xlsx** - file contains information on the available single flowers and bouquets, including the price of the flowers or bouquets and occasions that suit the flowers.
   ![Profiles](../graphics/Lab1_AI_Agent/2.74.png)
2. Open up and review the file.
   ![Profiles](../graphics/Lab1_AI_Agent/2.56.png)

3. Go to [Webex Control Hub](https://admin.webex.com){:target="\_blank"}.

4. Open **Contact Center** from the left side navigation panel, and under **Overview > Quick Links**, click on **Webex AI Agent**.
   ![Profiles](../graphics/Lab1_AI_Agent/L1M6_OpenWebexAI1.gif)



5. In AI Agent Builder, navigate to **Knowledge** from the menu panel on the left side.

6. Click **Create Knowledge Base**, provide Knowledge base name as **<copy><w class="attendee"></w>\_2000_AI_KB</copy>**, then click **Create**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.1.gif)


7. Click **Add File** or drag and drop the downloaded file **Flower_Catalog.xlsx** you downloaded on **Step 1**. Then click **Process Files**. Wait until the file is processed. It could take 1-2 mins.
   ![Profiles](../graphics/Lab1_AI_Agent/2.2.gif)


8. <span style="color: red;">[Read Only]</span> : You can also natively create a Knowledge Base document by clicking on **Documents**, then **Create Document** and paste the content. **Save** it.
   ![Profiles](../graphics/Lab1_AI_Agent/2.75KBDocument.gif)

9. Navigate to **AI Agents** from the left-hand side menu panel and click on **Create Agent**.
   ![Profiles](../graphics/Lab1_AI_Agent/2.58.gif)
10. Select **Start from Scratch** and click **Next**.
11. On **Create an AI agent** page select the following select the type of agent: **Autonomous**.

12. Provide the following information in the **Add the essential details**, then click **Create**:

    > Agent Name: **<copy><w class="attendee"></w>\_2000_AutoAI_Lab</copy>**
    >
    > System ID is created automatically
    >
    > AI engine: **Webex AI Pro 1.0**
    >
    > Agent's goal: **_<copy>This is Flower Shop. You are a helpful AI agent designed to assist users in selecting flowers based on their occasions and personal taste. You can also set up delivery and send a confirmation SMS with the order details.</copy>_**

    > <span style="color: red;">[Read Only]</span> Here you can find the best practices on how to write the  Agent"s goal.
    >  [Do's and Don'ts when writing goals](https://help.webex.com/en-us/article/nelkmxk/Guidelines-and-best-practices-for-automating-with-AI-agent#concept-template_96114022-037a-46be-80ce-bf8c6b0d67c0){:target="_blank"}


    ![Profiles](../graphics/Lab1_AI_Agent/2.3.gif)

13. Customize the Welcome message with: **_<copy>Hi there, my name is Blossom, the AI Agent. How can I assist you?</copy>_**

    ![Profiles](../graphics/Lab1_AI_Agent/2.16.png)

14. In the instructions, add additional specific guidelines that you would like the AI Agent to follow. Just **copy the text below and paste it to the Instructions section**: <br>

    > Always first check what is the event for the flowers so you can provide the best option.

    > Always print the total at the end of the conversation at any stage.

    > Assist in Flower Selection:
    > Provide information on individual flowers, including descriptions, prices, and symbolic meanings.
    > Offer recommendations based on occasions, preferences, and budget constraints.

    > Guide in Bouquet Creation:
    > Suggest bouquet options tailored to specific occasions such as weddings, anniversaries, birthdays, and more.
    > Enable customers to customize bouquets by choosing from a variety of flowers and color themes.

    > Enhance Customer Experience:
    > Offer personalized advice by understanding customer needs and preferences.
    > Ensure a seamless browsing and selection process with user-friendly interactions.

    > Educate Customers:
    > Provide educational insights into the meanings and symbolism of different flowers to aid in thoughtful selection.
    > Share care tips for maintaining flower freshness and longevity.

    > Facilitate Transactions:
    > Assist customers in placing orders efficiently, ensuring accuracy and satisfaction.
    > Provide support for payment processing and order confirmations.

    > Ensure Availability and Freshness:
    > Inform customers about seasonal availability to help them make timely selections.
    > Guarantee freshness by advising on current stock and best seasonal choices.

    > Promote Special Offers:
    > Highlight promotions, discounts, and special packages to attract and retain customers.
    > Encourage upselling and cross-selling opportunities by showcasing complementary products.

    > Ask if the customer needs the deliver. Collect the address and add price of the delivery to the Total.

    > Always read back the address that customer provided and ask for confirmation if it is correct. If it is not correct, ask to provide the address again.

    > Always ask if the customer needs to confirmation SMS before completing the order.</br></br>
    > ![Profiles](../graphics/Lab1_AI_Agent/2.4.png)

15. <span style="color: red;">[Read Only]</span> Here you can find the best practices on how to write the  Instructions: [Prompt engineering tips when writing instructions](https://help.webex.com/en-us/article/nelkmxk/Guidelines-and-best-practices-for-automating-with-AI-agent#concept-template_96114022-037a-46be-80ce-bf8c6b0d67c0){:target="_blank"}

16. Switch to **Knowledge** tab and from **Knowledge base** drop-down list, select **<copy><w class="attendee"></w>\_2000_AI_KB</copy>**.
    ![Profiles](../graphics/Lab1_AI_Agent/2.5.gif)

17. Click on **Save changes** and **Publish** the flow. Provide any version name in popped up window (e.g. "1.0").<br>
    ![Profiles](../graphics/Lab1_AI_Agent/2.6.gif)

### Task 2. Test your AI Agent

1. Click on **Preview** and test the AI Agent to understand how it behaves using the **chat channel** by clicking on **Start a chat**. You can start the conversation with: **<copy>I need flower for my friend</copy>**. And try to ask what is the flower availability and prices and what would be the total for some flower that you select.
   ![Profiles](../graphics/Lab1_AI_Agent/2.59.gif)

2. Click on **Preview** and test the AI Agent to understand how it behaves using the **voice channel** by clicking on **Start a call**. You can start the conversation with: **"I need flower for my friend"**<span class="copy-static" title="Click to copy!" data-copy-text="I need flowers for my friend"><span class="copy"></span></span> and try to customize your order.
   > **Note:** This Lab is being conducted in a classroom with approximately 20 attendees.  
   > Environmental factors, such as background noise and other attendees speaking next to you, may affect the response accuracy.  
   > For best results, it is **strongly recommended to use computer headphones**, if available.

![Profiles](../graphics/Lab1_AI_Agent/2.60.gif)

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
