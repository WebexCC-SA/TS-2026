---
#icon: material/folder-open-outline
icon: material/medal
---



# Mission 4: Preventing Callback duplication

!!! Note
    This task relies on completing Mission 3 of the Callback Track. Ensure that mission is completed to have a fully functional callback feature in your flow.


## Story 
If a caller who already has a scheduled callback contacts the contact center again to request another callback, our system can recognize this. It will then notify the caller that a callback is already scheduled and will be completed as soon as the next agent becomes available.

## Call Flow Overview

1. A new call from a caller, who already has a scheduled callback, enters the flow.</br>
2. The flow executes the logic configured in previous missions.</br>
3. The call is routed to the appropriate queue, but no agents are available.</br>
4. Since no agents are available, a callback option is offered to the caller.</br>
5. Once the caller requests for a callback, IVR replies that callback has been scheduled already.</br>

## Mission Details

Your mission is to:

1. Enhance the functionality of the **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** by introducing an advanced feature to check if a callback already exists for a specific tested number.

2. Use **Search API** request to fetch the data from Analyzer database. For more details see [**Search API**](https://developer.webex.com/webex-contact-center/docs/api/v1/tasks-call-control/create-task){:target="_blank"} for details.


## Build

1. Switch to the Flow Designer. Open your flow **<span class="attendee-id-container">Main_Flow_<span class="attendee-id-placeholder" data-prefix="Main_Flow_">Your_Attendee_ID</span><span class="copy" title="Click to copy!"></span></span>** and make sure **Edit** toggle is **ON**.

2. On the right-hand side, in the **Global Flow Properties** panel, scroll down to locate the **Flow Variables** section under **Custom Variables**. Click the **Add Flow Variable** button and add the following 3 flow variables: 

    - Callback Status variable:
    
      >
      > Name: **callbackStatus**<span class="copy-static" data-copy-text="callbackStatus"><span class="copy" title="Click to copy!"></span></span>
      >
      > Type: **String**
      >
      > Default Value: leave it empty
    
    - Callback Connect Time variable:
      
      >
      > Name: **callbackConnectTime**<span class="copy-static" data-copy-text="callbackConnectTime"><span class="copy" title="Click to copy!"></span></span>
      >
      > Type: **String**
      >
      > Default Value: leave it empty
      
    - Search Result variable:
      
      >
      > Name: **searchresult**<span class="copy-static" data-copy-text="searchresult"><span class="copy" title="Click to copy!"></span></span>
      >
      > Type: **String**
      >
      > Default Value: leave it empty

      ![profiles](../graphics/Lab2/L2M3-1.gif)

3. Add an **HTTP Request** node for the Search API query by following this order of steps:
    
    >
    > Remove the existing connection between **VerifyNumber** Option 1 ("Number OK") and **Callback** node
    >
    > Add an **HTTP Request** node and connect **VerifyNumber** Option 1 ("Number OK") to that node
    >
    > We will connect this **HTTP Request** node in next step
    >
    > Activity Label: **HTTPRequest_CallBackSearch**<span class="copy-static" data-copy-text="HTTPRequest_CallBackSearch"><span class="copy" title="Click to copy!"></span></span>
    >
    > Select **Use Authenticated Endpoint**
    >
    > Connector: **WxCC_API**
    > 
    > Path: **/search**
    > 
    > Method: **POST**
    > 
    > Content Type: **GraphQL**
    >
    > Copy this GraphQL query into the **Query** field of the **Request Body**:
    
    ```GraphQL
    query callbackSearch($from: Long!, $to: Long!, $filter: TaskDetailsFilters) {
    taskDetails(from: $from, to: $to, filter: $filter) {
      tasks {
        callbackData {
          callbackRequestTime
          callbackConnectTime
          callbackNumber
          callbackStatus
          callbackOrigin
          callbackType
        }
        lastEntryPoint {
          id
          name
          }
        }
      }
    }
    ```
    > Copy the following variables JSON into the **GraphQL variables** of the **Request Body**:
        
    ```JSON
    {
      "from": "{{now() | epoch(inMillis=true) - 15000000}}",
      "to": "{{now() | epoch(inMillis=true)}}",
      "filter": {
        "and": [
          {
            "callbackData": {
              "equals": {
                "callbackNumber": "{{NewNumber.DigitsEntered}}"
              }
            }
          },
          {
            "lastEntryPoint": {
              "id": {
                "equals": "{{NewPhoneContact.EntryPointId}}"
              }
            }
          }
        ]
      }
    }

    ```

    > Parse Settings:
    >
    > - Content Type: JSON
    > - Output Variable: `callbackStatus`<span class="copy-static" data-copy-text="callbackStatus"><span class="copy" title="Click to copy!"></span></span>
    > - Path Expression: `$.data.taskDetails.tasks[0].callbackData.callbackStatus`<span class="copy-static" data-copy-text="$.data.taskDetails.tasks[0].callbackData.callbackStatus"><span class="copy" title="Click to copy!"></span></span>
    >
    > Click **+ Add New**
    > 
    > - Output Variable: `callbackConnectTime`<span class="copy-static" data-copy-text="callbackConnectTime"><span class="copy" title="Click to copy!"></span></span>
    >
    > - Path Expression: `$.data.taskDetails.tasks[0].callbackData.callbackConnectTime`<span class="copy-static" data-copy-text="$.data.taskDetails.tasks[0].callbackData.callbackConnectTime"><span class="copy" title="Click to copy!"></span></span>
    >
    </br>
    </br>
    
      ![profiles](../graphics/Lab2/L2M3-2_New2.gif)
---     

4. Add **Set Veriable** node
    
    >
    > Connect **HTTPRequest_CallBackSearch** to this node
    >
    > We will connct **Set Variable** node in next step
    >
    > Variable: **searchresult**<span class="copy-static" data-copy-text="searchresult"><span class="copy" title="Click to copy!"></span></span>
    >
    > Set To Variable: **HTTPRequest_CallBackSearch.httpResponseBody**<span class="copy-static" data-copy-text="HTTPRequest_CallBackSearch.httpResponseBody"><span class="copy" title="Click to copy!"></span></span>
    >
    ![profiles](../graphics/Lab2/L2M3-3.gif)

5. Add a **Condition** node
    
      > 
      > Connect **Set Variable** created in previous step to this node
      >
      > Connect **False** exit path to existing CallBack node
      > 
      > We will connect **True** exit path in next step
      >
      > Expression: 
      ``` JSON
      {{ callbackConnectTime == "-1" ? (callbackStatus == "Not Processed" ? (HTTPRequest_CallBackSearch.httpStatusCode == 200 ? "true" : "false") : "false") : "false" }}
      ```


      > !!! Note
          Above expression uses nested ternary logic to combine the checks. This evaluates the first condition and then evaluates the second condition if the first is true and so on. In our case the expression returns True only when httpStatusCode equals **200**, callbackStatus is **Not Processed** and callbackConnectTime is **-1**

    ![profiles](../graphics/Lab2/L2M3-4.gif)

6. Add **Play Message** nodes: 
    
      > Enable Text-To-Speech
      >
      > Select the Connector: **Cisco Cloud Text-to-Speech**
      >
      > Click the **Add Text-to-Speech Message** button and paste text: **The callback for provided number has been scheduled already. Please await for a callback once next agent becomes available. Thank you for your patience.**<span class="copy-static" data-copy-text="The callback for provided number has been scheduled already. Please await for a callback once next agent becomes available. Thank you for your patience."><span class="copy" title="Click to copy!"></span></span>
      >
      > Delete the selection for Audio File
      >
      > Connect **True** exit path of **Condition** node created in previous step to this **Play Message** node

7. Add **Disconnect Contact** and connect the exit path of the **Play Message** created in previous step to this node.

    ![profiles](../graphics/Lab2/L2M3-5.gif)

8. Validate and publish the flow:

    > Enable the **Validation** toggle in the bottom right corner of the flow designer window to check for any potential flow errors and recommendations.
    >
    > If there are no **Flow Errors** after validation is complete, click on **Publish Flow** next to it.
    >
    > In the pop-up window, ensure that the **Latest** label is selected in the **Add Version Label(s)** list, then click **Publish Flow**.

## Testing
    
1. Make sure your Agent in **Not Available** state (select any Idle state). In this case call will not be assigned to an agent and callback will be proposed to a caller.

2. Make a call to your Support Number and if success you should hear configured messages and ask to press "1", "2" or "3". Press "1" to schedule a callback and provide a number for a callback. Because in current lab we are having number limitations we are going to provide a well known Cisco Worldwide Technical Support contact number **1 408 526 7209**<span class="copy-static" data-copy-text="+14085267209"><span class="copy" title="Click to copy!"></span></span>.

4. While keeping your agent **Not Available**, make another test call to your flow, press "1" and request for another callback to the same number **1 408 526 7209**<span class="copy-static" data-copy-text="+14085267209"><span class="copy" title="Click to copy!"></span></span>.

5. You should hear a message configured in **Step 6** of the current mission.

6. Click on **Analyze** to visually observe the call flow. Make sure you're viewing latest Published Version.

7. Review the flow and click on **HTTPRequest_CallBackSearch**. You will see the list of interactions at the bottom of the **Analyze** window. Find the last interaction (the top in the list) and click on **View interaction in debugger** link at the right-hand side of the interaction line. This will cross-launch Debugger to that particular call. Flow Debugger will be opened in a new browser tab.

8. Navigate to **HTTPRequest_CallBackSearch** Activity Name to see **Modified Variables** at the bottom of right-hand side of the debugger.

9. Click on **Set Variable**, which is the next step after **HTTPRequest_CallBackSearch**, to see full Search API response which we wrote to **searchresult** flow variable on the **Step 6** of the current mission configuration.

    ![profiles](../graphics/Lab2/L2M3-6.gif)

10. On Webex Desktop, make your agent **Available**. Webex Contact Center will reserve your agent right away and propose to answer a callback call.

11. Answer the call and wait until you are connected to a Cisco Technical Support IVR and hear a welcome prompt. Then disconnect the call in agent desktop to clean up pending callback requests.

---
<p style="text-align:center"><strong>Congratulations, you have succesfully completed Preventing Callback Duplication mission! 🎉🎉 </strong></p>
