---
#icon: material/folder-open-outline
icon: material/medal
---

# Mission 9: Customize AI Agent Language

## Mission overview

 - In this mission, you will change the language of your AI agent for the voice channel. This feature allows flexibility for supporting customers in different languages.

---

## Build

### Task 1. Configure language related Global Variables in voice flow

1. Go to Flows and open up your voice flow **<span class="attendee-id-container">AutonomousAIFlow_2000_<span class="attendee-id-placeholder" data-prefix="AutonomousAIFlow_2000_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and click **Edit Flow**.

    ![Profiles](../graphics/Lab1_AI_Agent/17.1.gif)

2. Click anywhere on the grey field area and navigate to the **Global Flow Properties** panel on the right-hand side.
    
    > - Scroll down and Locate the **Predefined Variables** section.
    >
    > - Click on the **Add Global Variables** button.
    >
    > - Search for **Global_Language**<span class="copy-static" data-copy-text="Global_Language"><span class="copy" title="Click to copy!"></span></span> variable and click on **Add** button.
    >
    > - Click on the **Add Global Variables** button one more time.
    >
    > - Search for **Global_VoiceName**<span class="copy-static" data-copy-text="Global_VoiceName"><span class="copy" title="Click to copy!"></span></span> variable and click on **Add** button.


    ![Profiles](../graphics/Lab1_AI_Agent/17.2.gif)

    !!! Note
        Review documentation with available languages and voices. <br/>
        [Supported-languages-and-voices-for-AI-agents](https://help.webex.com/en-us/article/pdef2d/Supported-languages-and-voices-for-AI-agents){:target="\_blank"}

3. Remove connection between **NewPhoneContact** and **VirtualAgent** nodes.

3. Add a **Set Variable** node from the activity library on the left with following configuration:
  
    > - Navigate to the **Variable Settings** section.
    >
    > - Click on the **Variable** drop-down list and select **Global_Language**.
    >
    > - Set Value: **es-US**<span class="copy-static" data-copy-text="es-US"><span class="copy" title="Click to copy!"></span></span>.
    >
    > - Click on the **+ Add New** button under the variable you have just added to add another one.
    >
    > - Click on the **Variable** drop-down list and select **Global_VoiceName**.
    >
    > - Set Value: **es-US-Alonso**<span class="copy-static" data-copy-text="es-US-Alonso"><span class="copy" title="Click to copy!"></span></span>.
    > <br/><br/>
    > - Connect **NewPhoneContact** to **Set Variable**.
    >
    > - Connect **Set Variable** to **VirtualAgent**.


    ![Profiles](../graphics/Lab1_AI_Agent/17.3.gif)

8. Call the number that is related to your channel. You should hear the AI agent play the Welcome message in English with an accent, but afterward, you can continue the conversation in the language that you configured in the flow. You will change the Welcome message in the next Task.

### Task 2. Change the Welcome message

The AI Agent Welcome message is currently a **static value**. If you want to change the Welcome message to a different one, you can update it in the **AI Agent Studio** portal.

1. Open up your AI Agent **<span class="attendee-id-container"><span class="attendee-id-placeholder" data-suffix="_2000_AutoAI_Lab">Your_Attendee_ID</span>_2000_AutoAI_Lab<span class="copy" title="Click to copy!"></span></span>**.
   ![Profiles](../graphics/Lab1_AI_Agent/17.6.gif)

2. Update the Welcome message with the one in different language. For example for Spanish you can update it to: **Hola, mi nombre es Blossom, el Agente de IA. ¿Cómo puedo ayudarle?**<span class="copy-static" data-copy-text="Hola, mi nombre es Blossom, el Agente de IA. ¿Cómo puedo ayudarle?"><span class="copy" title="Click to copy!"></span></span>. 

3. Click **Save changes** and **Publish** the flow. Provide any version name in popped up window (e.g. "1.6").<br>
   ![Profiles](../graphics/Lab1_AI_Agent/17.7.gif)

3. Call the number associated with your channel. You should hear the Welcome message and be able to have a conversation with the AI Agent in a different language. All functionality, such as transferring to the HR department or to another AI agent, will still function in different languages without adjusting any further configurations.

<p style="text-align:center"><strong>Congratulations, you have officially completed this mission! 🎉🎉 </strong></p>
