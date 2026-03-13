// Single source of truth for built-in prompts. Export for TypeScript.
export const emailPrompts = [
    {
      "id": "email_001",
      "category": "ask_for_help",
      "recipientType": "school_office",
      "recipientName": "Student Activities Office",
      "difficulty": "easy",
      "promptText": "You want to attend the campus club fair, but you do not know when and where it will take place. Write an email to the Student Activities Office asking for the details, explaining why you are interested, and asking for recommendations for clubs you might enjoy.",
      "requiredPoints": [
        "ask for the time and location of the club fair",
        "explain why you are interested in attending",
        "ask for recommendations for clubs"
      ],
      "ui": {
        "introZh": "这道题需要你向学校办公室询问信息，并表达你的兴趣。",
        "categoryZh": "请求帮助"
      },
      "modeSupport": {
        "fullyGuided": true,
        "partlyGuided": true,
        "testMode": true
      },
      "blocks": [
        {
          "key": "to",
          "labelZh": "收件人",
          "type": "fixed",
          "defaultText": "Student Activities Office",
          "defaultFrame": "",
          "hintZh": "系统已帮你填好收件人。",
          "required": true,
          "checkFocus": [],
          "feedbackTips": {
            "good": "",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "subject",
          "labelZh": "主题",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Question About the Campus Club Fair",
          "scaffoldParts": [{ "type": "variable", "text": "Question About the Campus Club Fair" }],
          "hintZh": "主题简短，点明邮件内容即可。",
          "required": true,
          "checkFocus": ["subject_is_clear", "matches_prompt"],
          "feedbackTips": {
            "good": "这个主题很清楚。",
            "tooVague": "主题有点太空，最好写出具体事情。",
            "toneTooDirect": "",
            "missingTaskFit": "主题和题目内容还不够贴合。"
          }
        },
        {
          "key": "greeting",
          "labelZh": "称呼",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Dear Student Activities Office,",
          "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Student Activities Office," }],
          "hintZh": "给学校办公室写邮件，用正式一点的称呼最安全。",
          "required": true,
          "checkFocus": ["tone_is_appropriate"],
          "feedbackTips": {
            "good": "这个称呼很合适。",
            "tooVague": "",
            "toneTooDirect": "这个称呼有点太随意了。",
            "missingTaskFit": ""
          }
        },
        {
          "key": "purpose",
          "labelZh": "写信目的",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m writing because I would greatly appreciate your help with the campus club fair.",
          "scaffoldParts": [{ "type": "template", "text": "I'm writing because " }, { "type": "variable", "text": "I would greatly appreciate your help with the campus club fair." }],
          "hintZh": "这里点明你写信是为了了解 club fair 的信息。",
          "required": true,
          "checkFocus": ["purpose_is_clear", "matches_prompt", "specific_enough"],
          "feedbackTips": {
            "good": "这一句已经清楚说明了写信目的。",
            "tooVague": "这句话有点空，可以更具体一点。",
            "toneTooDirect": "语气可以更礼貌一点。",
            "missingTaskFit": "这一句还没有准确对应题目的任务。"
          }
        },
        {
          "key": "detail1",
          "labelZh": "细节1",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m especially interested in attending because I would like to learn more about student organizations and meet new people.",
          "hintZh": "这里解释你为什么想去。",
          "required": true,
          "checkFocus": ["adds_relevant_reason", "specific_enough"],
          "feedbackTips": {
            "good": "这一句解释了你的兴趣，方向是对的。",
            "tooVague": "原因还可以更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要解释你为什么感兴趣。"
          }
        },
        {
          "key": "detail2",
          "labelZh": "细节2",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "However, I am not sure about the time and location, so I would be thankful if you could share those details with me.",
          "scaffoldParts": [{ "type": "template", "text": "However, I am not sure about the time and location, so " }, { "type": "variable", "text": "I would be thankful if you could share those details with me." }],
          "hintZh": "这里补充你目前不知道的信息。",
          "required": true,
          "checkFocus": ["adds_needed_context", "matches_prompt"],
          "feedbackTips": {
            "good": "这一句补充了很重要的背景信息。",
            "tooVague": "可以更明确地写出你不知道什么信息。",
            "toneTooDirect": "",
            "missingTaskFit": "这里应该写你想问的具体信息。"
          }
        },
        {
          "key": "action",
          "labelZh": "请求句",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "In addition, I would be very grateful if you could recommend a few clubs that might be a good fit for me.",
          "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "I would be very grateful if you could recommend a few clubs that might be a good fit for me." }],
          "hintZh": "这里写你希望对方进一步提供什么帮助。",
          "required": true,
          "checkFocus": ["clear_request", "polite_request", "covers_required_point"],
          "feedbackTips": {
            "good": "请求表达得很清楚，也比较礼貌。",
            "tooVague": "你的请求有点模糊，可以说得更具体。",
            "toneTooDirect": "可以把语气再放柔和一点。",
            "missingTaskFit": "这里还没有覆盖‘推荐社团’这个任务点。"
          }
        },
        {
          "key": "closing",
          "labelZh": "结尾",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Thank you very much for your time and assistance.",
          "scaffoldParts": [{ "type": "template", "text": "Thank you very much for your time and assistance." }],
          "hintZh": "简洁、礼貌地结束即可。",
          "required": true,
          "checkFocus": ["closing_is_polite"],
          "feedbackTips": {
            "good": "这个结尾很自然。",
            "tooVague": "",
            "toneTooDirect": "结尾可以更礼貌一点。",
            "missingTaskFit": ""
          }
        }
      ],
      "samples": {
        "band4Like": "Dear Student Activities Office,\n\nI’m writing because I would greatly appreciate your help with the campus club fair. I’m interested in attending because I want to learn more about student clubs and meet other students. However, I do not know when or where the event will take place. I would also be very grateful if you could recommend a few clubs that might match my interests.\n\nThank you very much for your time and assistance.",
        "band5Like": "Dear Student Activities Office,\n\nI’m writing because I would greatly appreciate your help with the campus club fair. I’m especially interested in attending because I would like to learn more about student organizations, meet new people, and become more involved on campus. However, I am not sure about the time or location of the event, so I would be thankful if you could share those details with me. In addition, I would be very grateful if you could recommend a few clubs that might be a good fit for someone who enjoys teamwork and creative activities.\n\nThank you very much for your time and assistance."
      },
      "commonMistakesZh": [
        "只问了时间地点，但没有解释为什么想参加",
        "没有覆盖‘请对方推荐社团’这个任务点",
        "语气太直接，比如直接写 Tell me the information"
      ]
    },
    {
      "id": "email_002",
      "category": "explain_a_problem",
      "recipientType": "professor",
      "recipientName": "Professor Lee",
      "difficulty": "medium",
      "promptText": "You are supposed to give a presentation in class next week, but a family emergency will require you to leave town for several days. Write an email to your professor explaining the situation, describing how it may affect your presentation, and asking whether another arrangement would be possible.",
      "requiredPoints": [
        "explain the family emergency",
        "describe how it affects the presentation",
        "ask whether another arrangement is possible"
      ],
      "ui": {
        "introZh": "这道题需要你礼貌说明一个突发问题，并提出合理请求。",
        "categoryZh": "解释问题"
      },
      "modeSupport": {
        "fullyGuided": true,
        "partlyGuided": true,
        "testMode": true
      },
      "blocks": [
        {
          "key": "to",
          "labelZh": "收件人",
          "type": "fixed",
          "defaultText": "Professor Lee",
          "defaultFrame": "",
          "hintZh": "系统已帮你填好收件人。",
          "required": true,
          "checkFocus": [],
          "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" }
        },
        {
          "key": "subject",
          "labelZh": "主题",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Question About Next Week’s Presentation",
          "scaffoldParts": [{ "type": "variable", "text": "Question About Next Week's Presentation" }],
          "hintZh": "主题要简洁、正式。",
          "required": true,
          "checkFocus": ["subject_is_clear", "tone_is_appropriate"],
          "feedbackTips": {
            "good": "这个主题比较清楚。",
            "tooVague": "主题可以更明确一些。",
            "toneTooDirect": "",
            "missingTaskFit": "主题最好更贴合题目。"
          }
        },
        {
          "key": "greeting",
          "labelZh": "称呼",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Dear Professor Lee,",
          "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Professor Lee," }],
          "hintZh": "写给教授，称呼要正式。",
          "required": true,
          "checkFocus": ["tone_is_appropriate"],
          "feedbackTips": {
            "good": "称呼合适。",
            "tooVague": "",
            "toneTooDirect": "对教授来说，这个称呼有点太随意。",
            "missingTaskFit": ""
          }
        },
        {
          "key": "purpose",
          "labelZh": "写信目的",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m writing to let you know that I have encountered an unexpected problem with next week’s presentation.",
          "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know that " }, { "type": "variable", "text": "I have encountered an unexpected problem with next week's presentation." }],
          "hintZh": "先点明你遇到了问题，而且和 presentation 有关。",
          "required": true,
          "checkFocus": ["purpose_is_clear", "matches_prompt"],
          "feedbackTips": {
            "good": "这句已经说明了核心问题。",
            "tooVague": "最好写清楚和什么事情有关。",
            "toneTooDirect": "",
            "missingTaskFit": "还没有看出这是和 presentation 相关的问题。"
          }
        },
        {
          "key": "detail1",
          "labelZh": "细节1",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "A family emergency has come up, which means that I will need to leave town for several days.",
          "scaffoldParts": [{ "type": "template", "text": "A family emergency has come up, " }, { "type": "variable", "text": "which means that I will need to leave town for several days." }],
          "hintZh": "这里写突发情况本身。",
          "required": true,
          "checkFocus": ["explains_problem", "clarity"],
          "feedbackTips": {
            "good": "这句把问题交代清楚了。",
            "tooVague": "问题描述还可以更明确。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要写清楚发生了什么。"
          }
        },
        {
          "key": "detail2",
          "labelZh": "细节2",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Because of this unexpected situation, I may not be able to prepare for or attend the presentation as planned.",
          "scaffoldParts": [{ "type": "template", "text": "Because of this unexpected situation, " }, { "type": "variable", "text": "I may not be able to prepare for or attend the presentation as planned." }],
          "hintZh": "这里写这个问题对 presentation 的影响。",
          "required": true,
          "checkFocus": ["states_consequence", "covers_required_point"],
          "feedbackTips": {
            "good": "这句清楚说明了影响。",
            "tooVague": "影响写得还不够具体。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要说明这件事会怎么影响 presentation。"
          }
        },
        {
          "key": "action",
          "labelZh": "请求句",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I was wondering whether it would be possible to make another arrangement for the presentation.",
          "scaffoldParts": [{ "type": "template", "text": "I was wondering whether it would be possible to " }, { "type": "variable", "text": "make another arrangement for the presentation." }],
          "hintZh": "礼貌地问是否可以换一种安排。",
          "required": true,
          "checkFocus": ["clear_request", "polite_request", "covers_required_point"],
          "feedbackTips": {
            "good": "请求表达得很礼貌。",
            "tooVague": "你的请求还不够具体。",
            "toneTooDirect": "可以更委婉一些。",
            "missingTaskFit": "这里还没有明确提出‘是否可以另作安排’。"
          }
        },
        {
          "key": "closing",
          "labelZh": "结尾",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Thank you for your understanding and consideration.",
          "scaffoldParts": [{ "type": "template", "text": "Thank you for your understanding and consideration." }],
          "hintZh": "这个场景下，这样的结尾很合适。",
          "required": true,
          "checkFocus": ["closing_is_polite"],
          "feedbackTips": {
            "good": "结尾自然、得体。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        }
      ],
      "samples": {
        "band4Like": "Dear Professor Lee,\n\nI’m writing to let you know that I have encountered an unexpected problem with next week’s presentation. A family emergency has come up, and I will need to leave town for several days. Because of this, I may not be able to prepare for the presentation as planned. I was wondering whether it would be possible to make another arrangement.\n\nThank you for your understanding and consideration.",
        "band5Like": "Dear Professor Lee,\n\nI’m writing to let you know that I have encountered an unexpected problem with next week’s presentation. A family emergency has come up, which means that I will need to leave town for several days. Because of this situation, I may not be able to prepare for or attend the presentation as planned. I was wondering whether it would be possible to make another arrangement, such as presenting at a later time or submitting my work in a different format.\n\nThank you for your understanding and consideration."
      },
      "commonMistakesZh": [
        "只说自己有事，但没说明会怎么影响 presentation",
        "请求太直接，比如 I need you to change it",
        "没有提出任何替代安排"
      ]
    },
    {
      "id": "email_003",
      "category": "make_a_suggestion",
      "recipientType": "school_office",
      "recipientName": "Campus Dining Manager",
      "difficulty": "medium",
      "promptText": "Your campus dining hall is considering ways to improve student satisfaction. Write an email to the campus dining manager suggesting one change, explaining why it would be helpful, and describing how it could benefit students.",
      "requiredPoints": [
        "suggest one change",
        "explain why it would be helpful",
        "describe how it could benefit students"
      ],
      "ui": {
        "introZh": "这道题需要你提出一个建议，并给出理由和影响。",
        "categoryZh": "提出建议"
      },
      "modeSupport": {
        "fullyGuided": true,
        "partlyGuided": true,
        "testMode": true
      },
      "blocks": [
        {
          "key": "to",
          "labelZh": "收件人",
          "type": "fixed",
          "defaultText": "Campus Dining Manager",
          "defaultFrame": "",
          "hintZh": "系统已帮你填好收件人。",
          "required": true,
          "checkFocus": [],
          "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" }
        },
        {
          "key": "subject",
          "labelZh": "主题",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Suggestion for Improving Campus Dining",
          "scaffoldParts": [{ "type": "variable", "text": "Suggestion for Improving Campus Dining" }],
          "hintZh": "主题最好点明是建议。",
          "required": true,
          "checkFocus": ["subject_is_clear", "matches_prompt"],
          "feedbackTips": {
            "good": "主题很清楚。",
            "tooVague": "主题还可以更明确。",
            "toneTooDirect": "",
            "missingTaskFit": "最好让人一眼看出这是一封建议邮件。"
          }
        },
        {
          "key": "greeting",
          "labelZh": "称呼",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Dear Campus Dining Manager,",
          "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Campus Dining Manager," }],
          "hintZh": "写给工作人员时，这样称呼比较稳妥。",
          "required": true,
          "checkFocus": ["tone_is_appropriate"],
          "feedbackTips": {
            "good": "称呼没有问题。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "purpose",
          "labelZh": "写信目的",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m writing to suggest that offering more healthy meal options could be incredibly helpful.",
          "scaffoldParts": [{ "type": "template", "text": "I'm writing to suggest that " }, { "type": "variable", "text": "offering more healthy meal options could be incredibly helpful." }],
          "hintZh": "这里直接提出建议。",
          "required": true,
          "checkFocus": ["purpose_is_clear", "states_suggestion"],
          "feedbackTips": {
            "good": "建议表达得很清楚。",
            "tooVague": "这里应该直接说出你的建议。",
            "toneTooDirect": "",
            "missingTaskFit": "这一句还没有明确提出建议。"
          }
        },
        {
          "key": "detail1",
          "labelZh": "细节1",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "One reason I believe this would be especially beneficial is that it would make it much easier for students to eat balanced meals on campus.",
          "scaffoldParts": [{ "type": "template", "text": "One reason I believe this would be especially beneficial is that " }, { "type": "variable", "text": "it would make it much easier for students to eat balanced meals on campus." }],
          "hintZh": "这里给出第一个理由。",
          "required": true,
          "checkFocus": ["gives_reason", "clarity"],
          "feedbackTips": {
            "good": "理由表达得比较自然。",
            "tooVague": "理由还可以更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要说明为什么这个建议有帮助。"
          }
        },
        {
          "key": "detail2",
          "labelZh": "细节2",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "In addition, this change could improve student satisfaction, since many students would appreciate having healthier and more varied choices.",
          "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "this change could improve student satisfaction, since many students would appreciate having healthier and more varied choices." }],
          "hintZh": "这里写这个建议会带来什么好处。",
          "required": true,
          "checkFocus": ["states_benefit", "covers_required_point"],
          "feedbackTips": {
            "good": "这句已经写出了受益点。",
            "tooVague": "这里的好处可以说得更具体。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要写出这个建议会如何帮助学生。"
          }
        },
        {
          "key": "action",
          "labelZh": "请求句",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "For these reasons, I sincerely hope you will consider this suggestion.",
          "scaffoldParts": [{ "type": "template", "text": "For these reasons, I sincerely hope you will consider this suggestion." }],
          "hintZh": "礼貌总结并表达希望对方考虑。",
          "required": true,
          "checkFocus": ["polite_conclusion", "fits_category"],
          "feedbackTips": {
            "good": "总结很自然。",
            "tooVague": "",
            "toneTooDirect": "这里可以再礼貌一些。",
            "missingTaskFit": ""
          }
        },
        {
          "key": "closing",
          "labelZh": "结尾",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Thank you for taking the time to read my email.",
          "scaffoldParts": [{ "type": "template", "text": "Thank you for taking the time to read my email." }],
          "hintZh": "简洁礼貌即可。",
          "required": true,
          "checkFocus": ["closing_is_polite"],
          "feedbackTips": {
            "good": "结尾合适。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        }
      ],
      "samples": {
        "band4Like": "Dear Campus Dining Manager,\n\nI’m writing to suggest that offering more healthy meal options could be incredibly helpful. One reason I believe this would be beneficial is that students could eat better meals on campus. In addition, this change could improve student satisfaction because many students want more healthy choices.\n\nFor these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email.",
        "band5Like": "Dear Campus Dining Manager,\n\nI’m writing to suggest that offering more healthy meal options could be incredibly helpful. One reason I believe this would be especially beneficial is that it would make it much easier for students to eat balanced meals on campus, even when they have busy schedules. In addition, this change could improve student satisfaction, since many students would appreciate having healthier and more varied choices in the dining hall. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email."
      },
      "commonMistakesZh": [
        "提出建议后没有解释为什么有帮助",
        "只写一个好处，没有写对学生的影响",
        "建议写得太空，比如 improve the food without saying how"
      ]
    },
    {
      "id": "email_004",
      "category": "give_information_or_respond",
      "recipientType": "classmate",
      "recipientName": "Mia",
      "difficulty": "easy",
      "promptText": "Your classmate is looking for a part-time job on campus. You recently learned about an opening in the library. Write an email to your classmate explaining what you found, why you thought of your classmate, and what your classmate should do next if interested.",
      "requiredPoints": [
        "explain what job opening you found",
        "say why you thought of your classmate",
        "say what your classmate should do next"
      ],
      "ui": {
        "introZh": "这道题需要你把一个有用信息告诉同学，并给出下一步建议。",
        "categoryZh": "提供信息 / 回复"
      },
      "modeSupport": {
        "fullyGuided": true,
        "partlyGuided": true,
        "testMode": true
      },
      "blocks": [
        {
          "key": "to",
          "labelZh": "收件人",
          "type": "fixed",
          "defaultText": "Mia",
          "defaultFrame": "",
          "hintZh": "系统已帮你填好收件人。",
          "required": true,
          "checkFocus": [],
          "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" }
        },
        {
          "key": "subject",
          "labelZh": "主题",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Part-Time Job Opening in the Library",
          "scaffoldParts": [{ "type": "variable", "text": "Part-Time Job Opening in the Library" }],
          "hintZh": "主题可以直接点出信息内容。",
          "required": true,
          "checkFocus": ["subject_is_clear"],
          "feedbackTips": {
            "good": "主题写得很清楚。",
            "tooVague": "主题还可以更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "greeting",
          "labelZh": "称呼",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Dear Mia,",
          "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Mia," }],
          "hintZh": "写给同学也可以用 Dear，比较稳。",
          "required": true,
          "checkFocus": ["tone_is_appropriate"],
          "feedbackTips": {
            "good": "称呼自然。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "purpose",
          "labelZh": "写信目的",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m writing to let you know about a part-time job opening in the library, which could be very useful for you.",
          "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know about " }, { "type": "variable", "text": "a part-time job opening in the library, which could be very useful for you." }],
          "hintZh": "先告诉对方你发现了什么信息。",
          "required": true,
          "checkFocus": ["purpose_is_clear", "matches_prompt"],
          "feedbackTips": {
            "good": "这一句已经交代了核心信息。",
            "tooVague": "最好写清楚是什么信息。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要说明你发现了什么。"
          }
        },
        {
          "key": "detail1",
          "labelZh": "细节1",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I immediately thought of you because you mentioned that you were looking for a flexible job on campus.",
          "scaffoldParts": [{ "type": "template", "text": "I immediately thought of you because " }, { "type": "variable", "text": "you mentioned that you were looking for a flexible job on campus." }],
          "hintZh": "这里解释为什么想到对方。",
          "required": true,
          "checkFocus": ["explains_relevance", "covers_required_point"],
          "feedbackTips": {
            "good": "这句很好地解释了为什么想到对方。",
            "tooVague": "原因还可以更具体一点。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要解释为什么你觉得这份工作适合对方。"
          }
        },
        {
          "key": "detail2",
          "labelZh": "细节2",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "From what I heard, the position involves helping students at the front desk and organizing returned books.",
          "scaffoldParts": [{ "type": "template", "text": "From what I heard, " }, { "type": "variable", "text": "the position involves helping students at the front desk and organizing returned books." }],
          "hintZh": "这里补充你了解到的具体工作内容。",
          "required": true,
          "checkFocus": ["adds_useful_information", "clarity"],
          "feedbackTips": {
            "good": "补充信息比较有帮助。",
            "tooVague": "这部分还可以更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": "这里最好补充一下你找到的具体信息。"
          }
        },
        {
          "key": "action",
          "labelZh": "请求句",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "If you are interested, I think you should contact the library office as soon as possible to learn more or apply.",
          "scaffoldParts": [{ "type": "template", "text": "If you are interested, " }, { "type": "variable", "text": "I think you should contact the library office as soon as possible to learn more or apply." }],
          "hintZh": "这里写对方下一步可以做什么。",
          "required": true,
          "checkFocus": ["clear_next_step", "covers_required_point"],
          "feedbackTips": {
            "good": "下一步建议写得很清楚。",
            "tooVague": "最好明确告诉对方应该做什么。",
            "toneTooDirect": "",
            "missingTaskFit": "这里还没有说明对方下一步该怎么做。"
          }
        },
        {
          "key": "closing",
          "labelZh": "结尾",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Please let me know if you would like any additional information.",
          "scaffoldParts": [{ "type": "template", "text": "Please let me know if you would like any additional information." }],
          "hintZh": "结尾也可以继续表示愿意帮忙。",
          "required": true,
          "checkFocus": ["closing_is_polite"],
          "feedbackTips": {
            "good": "结尾很自然。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        }
      ],
      "samples": {
        "band4Like": "Dear Mia,\n\nI’m writing to let you know about a part-time job opening in the library, which could be very useful for you. I immediately thought of you because you said you wanted a job on campus. From what I heard, the job includes helping students and organizing books. If you are interested, I think you should contact the library office soon.\n\nPlease let me know if you would like any additional information.",
        "band5Like": "Dear Mia,\n\nI’m writing to let you know about a part-time job opening in the library, which could be very useful for you. I immediately thought of you because you mentioned that you were looking for a flexible job on campus that would fit your class schedule. From what I heard, the position involves helping students at the front desk and organizing returned books, so it seems like a practical and manageable job. If you are interested, I think you should contact the library office as soon as possible to learn more or apply.\n\nPlease let me know if you would like any additional information."
      },
      "commonMistakesZh": [
        "只说有个工作，没有描述具体内容",
        "没有解释为什么想到这个同学",
        "没有告诉对方下一步应该做什么"
      ]
    },
    {
      "id": "email_005",
      "category": "invite_or_propose",
      "recipientType": "classmate",
      "recipientName": "Daniel",
      "difficulty": "easy",
      "promptText": "A new international food festival will take place on campus this weekend. Write an email to your classmate inviting him to go with you, explaining why you think he would enjoy it, and describing one benefit of attending together.",
      "requiredPoints": [
        "invite your classmate to the festival",
        "explain why he would enjoy it",
        "describe one benefit of going together"
      ],
      "ui": {
        "introZh": "这道题需要你发出邀请，并解释为什么对方会感兴趣。",
        "categoryZh": "邀请 / 提议"
      },
      "modeSupport": {
        "fullyGuided": true,
        "partlyGuided": true,
        "testMode": true
      },
      "blocks": [
        {
          "key": "to",
          "labelZh": "收件人",
          "type": "fixed",
          "defaultText": "Daniel",
          "defaultFrame": "",
          "hintZh": "系统已帮你填好收件人。",
          "required": true,
          "checkFocus": [],
          "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" }
        },
        {
          "key": "subject",
          "labelZh": "主题",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Would You Like to Go to the Food Festival?",
          "scaffoldParts": [{ "type": "variable", "text": "Would You Like to Go to the Food Festival?" }],
          "hintZh": "主题可以稍微自然一点，但仍要清楚。",
          "required": true,
          "checkFocus": ["subject_is_clear"],
          "feedbackTips": {
            "good": "这个主题自然又清楚。",
            "tooVague": "主题还可以更具体。",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "greeting",
          "labelZh": "称呼",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Dear Daniel,",
          "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Daniel," }],
          "hintZh": "写给同学，用 Dear 很稳妥。",
          "required": true,
          "checkFocus": ["tone_is_appropriate"],
          "feedbackTips": {
            "good": "称呼没有问题。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "purpose",
          "labelZh": "写信目的",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I’m writing to invite you to the international food festival, because I think it would be a valuable experience for both of us.",
          "scaffoldParts": [{ "type": "template", "text": "I'm writing to invite you to " }, { "type": "variable", "text": "the international food festival, because I think it would be a valuable experience for both of us." }],
          "hintZh": "这里直接发出邀请。",
          "required": true,
          "checkFocus": ["purpose_is_clear", "states_invitation"],
          "feedbackTips": {
            "good": "邀请表达得很明确。",
            "tooVague": "这里需要直接写出你想邀请对方做什么。",
            "toneTooDirect": "",
            "missingTaskFit": "这一句还没有明确发出邀请。"
          }
        },
        {
          "key": "detail1",
          "labelZh": "细节1",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I thought you might especially enjoy it since you are always interested in trying foods from different cultures.",
          "hintZh": "这里解释为什么你觉得对方会喜欢。",
          "required": true,
          "checkFocus": ["explains_interest", "covers_required_point"],
          "feedbackTips": {
            "good": "这句很好地解释了为什么对方会感兴趣。",
            "tooVague": "原因还可以更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要解释为什么对方会喜欢这个活动。"
          }
        },
        {
          "key": "detail2",
          "labelZh": "细节2",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "It would also give us a great chance to spend time together and talk while enjoying something new.",
          "scaffoldParts": [{ "type": "template", "text": "It would also give us a great chance to " }, { "type": "variable", "text": "spend time together and talk while enjoying something new." }],
          "hintZh": "这里写一起去的好处。",
          "required": true,
          "checkFocus": ["states_shared_benefit", "covers_required_point"],
          "feedbackTips": {
            "good": "这句已经写出了‘一起去’的好处。",
            "tooVague": "这里还可以把好处写得更具体一些。",
            "toneTooDirect": "",
            "missingTaskFit": "这里需要写‘一起参加’有什么好处。"
          }
        },
        {
          "key": "action",
          "labelZh": "请求句",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "Please let me know if you would like to join me this weekend.",
          "hintZh": "邀请后自然地请对方回复。",
          "required": true,
          "checkFocus": ["clear_next_step", "polite_request"],
          "feedbackTips": {
            "good": "这一句很自然。",
            "tooVague": "最好明确请对方回复。",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        },
        {
          "key": "closing",
          "labelZh": "结尾",
          "type": "editable",
          "defaultText": "",
          "defaultFrame": "I hope to hear from you soon.",
          "scaffoldParts": [{ "type": "template", "text": "I hope to hear from you soon." }],
          "hintZh": "简短、自然即可。",
          "required": true,
          "checkFocus": ["closing_is_polite"],
          "feedbackTips": {
            "good": "结尾自然。",
            "tooVague": "",
            "toneTooDirect": "",
            "missingTaskFit": ""
          }
        }
      ],
      "samples": {
        "band4Like": "Dear Daniel,\n\nI’m writing to invite you to the international food festival, because I think it would be a valuable experience for both of us. I thought you might enjoy it since you like trying foods from different cultures. It would also give us a good chance to spend time together. Please let me know if you would like to join me this weekend.\n\nI hope to hear from you soon.",
        "band5Like": "Dear Daniel,\n\nI’m writing to invite you to the international food festival, because I think it would be a valuable experience for both of us. I thought you might especially enjoy it since you are always interested in trying foods from different cultures and learning more about them. It would also give us a great chance to spend time together and talk while enjoying something new, which is one reason I wanted to ask you. Please let me know if you would like to join me this weekend.\n\nI hope to hear from you soon."
      },
      "commonMistakesZh": [
        "只发出邀请，没有解释为什么对方会喜欢",
        "没有写一起去的好处",
        "语言太像口语聊天，不像邮件"
      ]
    },
    {
      "id": "email_006",
      "category": "ask_for_help",
      "recipientType": "school_office",
      "recipientName": "Career Center",
      "difficulty": "medium",
      "promptText": "The campus career fair is coming up, and you would like to prepare. You are not sure about the date, location, or how to sign up. Write an email to the Career Center asking for this information, explaining why you want to attend, and asking for one tip on how to prepare.",
      "requiredPoints": [
        "ask for the date, location, and how to sign up",
        "explain why you want to attend the career fair",
        "ask for one tip on how to prepare"
      ],
      "ui": {
        "introZh": "这道题需要你向就业中心询问招聘会信息，并说明你的准备需求。",
        "categoryZh": "请求帮助"
      },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Career Center", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Question About the Campus Career Fair", "scaffoldParts": [{ "type": "variable", "text": "Question About the Campus Career Fair" }], "hintZh": "主题简短，点明邮件内容即可。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "这个主题很清楚。", "tooVague": "主题有点太空，最好写出具体事情。", "toneTooDirect": "", "missingTaskFit": "主题和题目内容还不够贴合。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Career Center,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Career Center," }], "hintZh": "给学校办公室写邮件，用正式一点的称呼最安全。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "这个称呼很合适。", "tooVague": "", "toneTooDirect": "这个称呼有点太随意了。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing because I would greatly appreciate your help with the upcoming campus career fair.", "scaffoldParts": [{ "type": "template", "text": "I'm writing because " }, { "type": "variable", "text": "I would greatly appreciate your help with the upcoming campus career fair." }], "hintZh": "这里点明你写信是为了了解招聘会的信息。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt", "specific_enough"], "feedbackTips": { "good": "这一句已经清楚说明了写信目的。", "tooVague": "这句话有点空，可以更具体一点。", "toneTooDirect": "语气可以更礼貌一点。", "missingTaskFit": "这一句还没有准确对应题目的任务。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I am especially interested in attending because I am starting to look for internships and would like to meet employers on campus.", "hintZh": "这里解释你为什么想去。", "required": true, "checkFocus": ["adds_relevant_reason", "specific_enough"], "feedbackTips": { "good": "这一句解释了你的兴趣，方向是对的。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释你为什么感兴趣。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "However, I am not sure about the date, location, or how to register, so I would be thankful if you could share those details with me.", "scaffoldParts": [{ "type": "template", "text": "However, I am not sure about the date, location, or how to register, so " }, { "type": "variable", "text": "I would be thankful if you could share those details with me." }], "hintZh": "这里补充你目前不知道的信息。", "required": true, "checkFocus": ["adds_needed_context", "matches_prompt"], "feedbackTips": { "good": "这一句补充了很重要的背景信息。", "tooVague": "可以更明确地写出你不知道什么信息。", "toneTooDirect": "", "missingTaskFit": "这里应该写你想问的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "In addition, I would be very grateful if you could give me one tip on how to prepare for the fair.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "I would be very grateful if you could give me one tip on how to prepare for the fair." }], "hintZh": "这里写你希望对方进一步提供什么帮助。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很清楚，也比较礼貌。", "tooVague": "你的请求有点模糊，可以说得更具体。", "toneTooDirect": "可以把语气再放柔和一点。", "missingTaskFit": "这里还没有覆盖「请对方给一个准备建议」这个任务点。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you very much for your time and assistance.", "scaffoldParts": [{ "type": "template", "text": "Thank you very much for your time and assistance." }], "hintZh": "简洁、礼貌地结束即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "这个结尾很自然。", "tooVague": "", "toneTooDirect": "结尾可以更礼貌一点。", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Career Center,\n\nI'm writing because I would greatly appreciate your help with the upcoming campus career fair. I want to attend because I am starting to look for internships. However, I do not know the date, location, or how to sign up. I would also be very grateful if you could give me one tip on how to prepare.\n\nThank you very much for your time and assistance.",
        "band5Like": "Dear Career Center,\n\nI'm writing because I would greatly appreciate your help with the upcoming campus career fair. I am especially interested in attending because I am starting to look for internships and would like to meet employers on campus. However, I am not sure about the date, location, or how to register, so I would be thankful if you could share those details with me. In addition, I would be very grateful if you could give me one tip on how to prepare for the fair.\n\nThank you very much for your time and assistance."
      },
      "commonMistakesZh": [
        "只问了时间地点，但没有解释为什么想参加招聘会",
        "没有覆盖「请对方给一个准备建议」这个任务点",
        "语气太直接，比如直接写 Tell me the details"
      ]
    },
    {
      "id": "email_007",
      "category": "ask_for_help",
      "recipientType": "school_office",
      "recipientName": "Campus Bookstore",
      "difficulty": "easy",
      "promptText": "You need a textbook for your course, but you cannot find it at the campus bookstore. Write an email to the bookstore asking whether they can order it or suggest where else you might get it, and explaining why you need the book.",
      "requiredPoints": [
        "ask whether the bookstore can order the book or suggest where to get it",
        "explain why you need the textbook"
      ],
      "ui": { "introZh": "这道题需要你向书店询问教材信息并说明需求。", "categoryZh": "请求帮助" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Campus Bookstore", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Question About a Textbook", "scaffoldParts": [{ "type": "variable", "text": "Question About a Textbook" }], "hintZh": "主题简短，点明邮件内容即可。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "这个主题很清楚。", "tooVague": "主题有点太空，最好写出具体事情。", "toneTooDirect": "", "missingTaskFit": "主题和题目内容还不够贴合。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Campus Bookstore,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Campus Bookstore," }], "hintZh": "给学校办公室写邮件，用正式一点的称呼最安全。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "这个称呼很合适。", "tooVague": "", "toneTooDirect": "这个称呼有点太随意了。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing because I would greatly appreciate your help finding a textbook I need for my course.", "scaffoldParts": [{ "type": "template", "text": "I'm writing because " }, { "type": "variable", "text": "I would greatly appreciate your help finding a textbook I need for my course." }], "hintZh": "这里点明你写信是为了找教材。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt", "specific_enough"], "feedbackTips": { "good": "这一句已经清楚说明了写信目的。", "tooVague": "这句话有点空，可以更具体一点。", "toneTooDirect": "语气可以更礼貌一点。", "missingTaskFit": "这一句还没有准确对应题目的任务。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I need this book for my class and could not find it on your shelves.", "hintZh": "这里解释你为什么需要这本书。", "required": true, "checkFocus": ["adds_relevant_reason", "specific_enough"], "feedbackTips": { "good": "这一句解释了你的需求，方向是对的。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释你为什么需要这本书。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "However, I am not sure if you can order it or where else I might get it, so I would be thankful if you could let me know.", "scaffoldParts": [{ "type": "template", "text": "However, I am not sure if you can order it or where else I might get it, so " }, { "type": "variable", "text": "I would be thankful if you could let me know." }], "hintZh": "这里补充你目前不知道的信息。", "required": true, "checkFocus": ["adds_needed_context", "matches_prompt"], "feedbackTips": { "good": "这一句补充了很重要的背景信息。", "tooVague": "可以更明确地写出你不知道什么信息。", "toneTooDirect": "", "missingTaskFit": "这里应该写你想问的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "In addition, I would be very grateful if you could tell me whether you can order it or suggest another place to find it.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "I would be very grateful if you could tell me whether you can order it or suggest another place to find it." }], "hintZh": "这里写你希望对方进一步提供什么帮助。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很清楚，也比较礼貌。", "tooVague": "你的请求有点模糊，可以说得更具体。", "toneTooDirect": "可以把语气再放柔和一点。", "missingTaskFit": "这里还没有覆盖题目要求的请求。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you very much for your time and assistance.", "scaffoldParts": [{ "type": "template", "text": "Thank you very much for your time and assistance." }], "hintZh": "简洁、礼貌地结束即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "这个结尾很自然。", "tooVague": "", "toneTooDirect": "结尾可以更礼貌一点。", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Campus Bookstore,\n\nI'm writing because I would greatly appreciate your help finding a textbook I need for my course. I need it for my class and could not find it at the store. I would be very grateful if you could tell me whether you can order it or where else I might get it.\n\nThank you very much for your time and assistance.",
        "band5Like": "Dear Campus Bookstore,\n\nI'm writing because I would greatly appreciate your help finding a textbook I need for my course. I need this book for my class and could not find it on your shelves. However, I am not sure if you can order it or where else I might get it, so I would be thankful if you could let me know. In addition, I would be very grateful if you could tell me whether you can order it or suggest another place to find it.\n\nThank you very much for your time and assistance."
      },
      "commonMistakesZh": [
        "只问有没有书，没有说明是哪门课、为什么需要",
        "没有同时请求「能否订购」或「其他购买途径」",
        "语气太直接"
      ]
    },
    {
      "id": "email_008",
      "category": "ask_for_help",
      "recipientType": "school_office",
      "recipientName": "Campus Gym Staff",
      "difficulty": "easy",
      "promptText": "You are a new user of the campus gym and would like to know the rules and how to get started. Write an email to the gym staff asking about the rules for new users, what you need to bring, and whether there is an orientation session.",
      "requiredPoints": [
        "ask about the rules for new users",
        "ask what you need to bring",
        "ask whether there is an orientation session"
      ],
      "ui": { "introZh": "这道题需要你向体育馆工作人员询问新用户规则与入门信息。", "categoryZh": "请求帮助" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Campus Gym Staff", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Question About Gym Rules for New Users", "scaffoldParts": [{ "type": "variable", "text": "Question About Gym Rules for New Users" }], "hintZh": "主题简短，点明邮件内容即可。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "这个主题很清楚。", "tooVague": "主题有点太空，最好写出具体事情。", "toneTooDirect": "", "missingTaskFit": "主题和题目内容还不够贴合。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Campus Gym Staff,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Campus Gym Staff," }], "hintZh": "给学校办公室写邮件，用正式一点的称呼最安全。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "这个称呼很合适。", "tooVague": "", "toneTooDirect": "这个称呼有点太随意了。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing because I would greatly appreciate your help with the rules and procedures for new gym users.", "scaffoldParts": [{ "type": "template", "text": "I'm writing because " }, { "type": "variable", "text": "I would greatly appreciate your help with the rules and procedures for new gym users." }], "hintZh": "这里点明你写信是为了了解健身房规则。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt", "specific_enough"], "feedbackTips": { "good": "这一句已经清楚说明了写信目的。", "tooVague": "这句话有点空，可以更具体一点。", "toneTooDirect": "语气可以更礼貌一点。", "missingTaskFit": "这一句还没有准确对应题目的任务。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I have just started using the campus gym and would like to use it safely and correctly.", "hintZh": "这里解释你为什么需要这些信息。", "required": true, "checkFocus": ["adds_relevant_reason", "specific_enough"], "feedbackTips": { "good": "这一句解释了你的需求，方向是对的。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释你为什么感兴趣。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "However, I am not sure about the rules for new users or what I need to bring, so I would be thankful if you could share those details with me.", "scaffoldParts": [{ "type": "template", "text": "However, I am not sure about the rules for new users or what I need to bring, so " }, { "type": "variable", "text": "I would be thankful if you could share those details with me." }], "hintZh": "这里补充你目前不知道的信息。", "required": true, "checkFocus": ["adds_needed_context", "matches_prompt"], "feedbackTips": { "good": "这一句补充了很重要的背景信息。", "tooVague": "可以更明确地写出你不知道什么信息。", "toneTooDirect": "", "missingTaskFit": "这里应该写你想问的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "In addition, I would be very grateful if you could let me know whether there is an orientation session for new users.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "I would be very grateful if you could let me know whether there is an orientation session for new users." }], "hintZh": "这里写你希望对方进一步提供什么帮助。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很清楚，也比较礼貌。", "tooVague": "你的请求有点模糊，可以说得更具体。", "toneTooDirect": "可以把语气再放柔和一点。", "missingTaskFit": "这里还没有覆盖题目要求的请求。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you very much for your time and assistance.", "scaffoldParts": [{ "type": "template", "text": "Thank you very much for your time and assistance." }], "hintZh": "简洁、礼貌地结束即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "这个结尾很自然。", "tooVague": "", "toneTooDirect": "结尾可以更礼貌一点。", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Campus Gym Staff,\n\nI'm writing because I would greatly appreciate your help with the rules and procedures for new gym users. I have just started using the campus gym. However, I do not know the rules or what I need to bring. I would also be very grateful if you could tell me whether there is an orientation session for new users.\n\nThank you very much for your time and assistance.",
        "band5Like": "Dear Campus Gym Staff,\n\nI'm writing because I would greatly appreciate your help with the rules and procedures for new gym users. I have just started using the campus gym and would like to use it safely and correctly. However, I am not sure about the rules for new users or what I need to bring, so I would be thankful if you could share those details with me. In addition, I would be very grateful if you could let me know whether there is an orientation session for new users.\n\nThank you very much for your time and assistance."
      },
      "commonMistakesZh": [
        "只问规则，没有问需要带什么或是否有说明会",
        "没有说明自己是新用户",
        "语气太直接"
      ]
    },
    {
      "id": "email_009",
      "category": "ask_for_help",
      "recipientType": "school_office",
      "recipientName": "International Office",
      "difficulty": "medium",
      "promptText": "You are interested in a short study-abroad program and would like to know how the application process works. Write an email to the International Office asking about the application steps, the deadline, and what documents you need to submit.",
      "requiredPoints": [
        "ask about the application steps",
        "ask about the deadline",
        "ask what documents you need to submit"
      ],
      "ui": { "introZh": "这道题需要你向国际处询问短期交流申请流程与材料。", "categoryZh": "请求帮助" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "International Office", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Question About Short Study-Abroad Application", "scaffoldParts": [{ "type": "variable", "text": "Question About Short Study-Abroad Application" }], "hintZh": "主题简短，点明邮件内容即可。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "这个主题很清楚。", "tooVague": "主题有点太空，最好写出具体事情。", "toneTooDirect": "", "missingTaskFit": "主题和题目内容还不够贴合。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear International Office,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "International Office," }], "hintZh": "给学校办公室写邮件，用正式一点的称呼最安全。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "这个称呼很合适。", "tooVague": "", "toneTooDirect": "这个称呼有点太随意了。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing because I would greatly appreciate your help with the application process for the short study-abroad program.", "scaffoldParts": [{ "type": "template", "text": "I'm writing because " }, { "type": "variable", "text": "I would greatly appreciate your help with the application process for the short study-abroad program." }], "hintZh": "这里点明你写信是为了了解申请流程。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt", "specific_enough"], "feedbackTips": { "good": "这一句已经清楚说明了写信目的。", "tooVague": "这句话有点空，可以更具体一点。", "toneTooDirect": "语气可以更礼貌一点。", "missingTaskFit": "这一句还没有准确对应题目的任务。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I am very interested in joining one of the short programs and would like to apply in time.", "hintZh": "这里解释你为什么感兴趣。", "required": true, "checkFocus": ["adds_relevant_reason", "specific_enough"], "feedbackTips": { "good": "这一句解释了你的兴趣，方向是对的。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释你为什么感兴趣。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "However, I am not sure about the application steps, the deadline, or what documents I need to submit, so I would be thankful if you could share those details with me.", "scaffoldParts": [{ "type": "template", "text": "However, I am not sure about the application steps, the deadline, or what documents I need to submit, so " }, { "type": "variable", "text": "I would be thankful if you could share those details with me." }], "hintZh": "这里补充你目前不知道的信息。", "required": true, "checkFocus": ["adds_needed_context", "matches_prompt"], "feedbackTips": { "good": "这一句补充了很重要的背景信息。", "tooVague": "可以更明确地写出你不知道什么信息。", "toneTooDirect": "", "missingTaskFit": "这里应该写你想问的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "In addition, I would be very grateful if you could tell me the application steps, the deadline, and the required documents.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "I would be very grateful if you could tell me the application steps, the deadline, and the required documents." }], "hintZh": "这里写你希望对方进一步提供什么帮助。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很清楚，也比较礼貌。", "tooVague": "你的请求有点模糊，可以说得更具体。", "toneTooDirect": "可以把语气再放柔和一点。", "missingTaskFit": "这里还没有覆盖题目要求的请求。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you very much for your time and assistance.", "scaffoldParts": [{ "type": "template", "text": "Thank you very much for your time and assistance." }], "hintZh": "简洁、礼貌地结束即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "这个结尾很自然。", "tooVague": "", "toneTooDirect": "结尾可以更礼貌一点。", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear International Office,\n\nI'm writing because I would greatly appreciate your help with the application process for the short study-abroad program. I am interested in joining a short program. However, I do not know the application steps, the deadline, or what documents to submit. I would be very grateful if you could tell me these details.\n\nThank you very much for your time and assistance.",
        "band5Like": "Dear International Office,\n\nI'm writing because I would greatly appreciate your help with the application process for the short study-abroad program. I am very interested in joining one of the short programs and would like to apply in time. However, I am not sure about the application steps, the deadline, or what documents I need to submit, so I would be thankful if you could share those details with me. In addition, I would be very grateful if you could tell me the application steps, the deadline, and the required documents.\n\nThank you very much for your time and assistance."
      },
      "commonMistakesZh": [
        "只问截止日期，没有问申请步骤或所需材料",
        "没有说明是短期交流项目",
        "语气太直接"
      ]
    },
    {
      "id": "email_010",
      "category": "explain_a_problem",
      "recipientType": "professor",
      "recipientName": "Professor Martinez",
      "difficulty": "medium",
      "promptText": "You were about to submit an assignment online when your computer stopped working. Write an email to your professor explaining what happened, how it may affect your submission, and asking whether you can submit in another way or by a different deadline.",
      "requiredPoints": [
        "explain that your computer stopped working before submission",
        "describe how it may affect your submission",
        "ask whether you can submit in another way or by a different deadline"
      ],
      "ui": { "introZh": "这道题需要你说明电脑故障导致无法按时交作业，并礼貌提出替代方案。", "categoryZh": "解释问题" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Professor Martinez", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Problem Submitting My Assignment", "scaffoldParts": [{ "type": "variable", "text": "Problem Submitting My Assignment" }], "hintZh": "主题要简洁、正式。", "required": true, "checkFocus": ["subject_is_clear", "tone_is_appropriate"], "feedbackTips": { "good": "这个主题比较清楚。", "tooVague": "主题可以更明确一些。", "toneTooDirect": "", "missingTaskFit": "主题最好更贴合题目。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Professor Martinez,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Professor Martinez," }], "hintZh": "写给教授，称呼要正式。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼合适。", "tooVague": "", "toneTooDirect": "对教授来说，这个称呼有点太随意。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know that I have encountered an unexpected problem submitting my assignment.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know that " }, { "type": "variable", "text": "I have encountered an unexpected problem submitting my assignment." }], "hintZh": "先点明你遇到了问题，而且和作业提交有关。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这句已经说明了核心问题。", "tooVague": "最好写清楚和什么事情有关。", "toneTooDirect": "", "missingTaskFit": "还没有看出这是和作业提交相关的问题。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "My computer stopped working right before I could submit the assignment online.", "scaffoldParts": [{ "type": "template", "text": "My computer stopped working " }, { "type": "variable", "text": "right before I could submit the assignment online." }], "hintZh": "这里写突发情况本身。", "required": true, "checkFocus": ["explains_problem", "clarity"], "feedbackTips": { "good": "这句把问题交代清楚了。", "tooVague": "问题描述还可以更明确。", "toneTooDirect": "", "missingTaskFit": "这里需要写清楚发生了什么。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "Because of this, I may not be able to submit the assignment by the original deadline.", "scaffoldParts": [{ "type": "template", "text": "Because of this, " }, { "type": "variable", "text": "I may not be able to submit the assignment by the original deadline." }], "hintZh": "这里写这个问题对提交的影响。", "required": true, "checkFocus": ["states_consequence", "covers_required_point"], "feedbackTips": { "good": "这句清楚说明了影响。", "tooVague": "影响写得还不够具体。", "toneTooDirect": "", "missingTaskFit": "这里需要说明这件事会怎么影响提交。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "I was wondering whether it would be possible to submit in another way or by a slightly later deadline.", "scaffoldParts": [{ "type": "template", "text": "I was wondering whether it would be possible to " }, { "type": "variable", "text": "submit in another way or by a slightly later deadline." }], "hintZh": "礼貌地问是否可以换一种提交方式或延后截止。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很礼貌。", "tooVague": "你的请求还不够具体。", "toneTooDirect": "可以更委婉一些。", "missingTaskFit": "这里还没有明确提出替代方案。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for your understanding and consideration.", "scaffoldParts": [{ "type": "template", "text": "Thank you for your understanding and consideration." }], "hintZh": "这个场景下，这样的结尾很合适。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然、得体。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Professor Martinez,\n\nI'm writing to let you know that I have encountered an unexpected problem submitting my assignment. My computer stopped working right before I could submit it online. Because of this, I may not be able to submit by the deadline. I was wondering whether it would be possible to submit in another way or by a slightly later deadline.\n\nThank you for your understanding and consideration.",
        "band5Like": "Dear Professor Martinez,\n\nI'm writing to let you know that I have encountered an unexpected problem submitting my assignment. My computer stopped working right before I could submit the assignment online. Because of this, I may not be able to submit the assignment by the original deadline. I was wondering whether it would be possible to submit in another way, for example by email or in person, or by a slightly later deadline once my computer is repaired.\n\nThank you for your understanding and consideration."
      },
      "commonMistakesZh": [
        "只说了电脑坏了，没说明对交作业的影响",
        "没有明确请求替代提交方式或延后截止",
        "语气太直接"
      ]
    },
    {
      "id": "email_011",
      "category": "explain_a_problem",
      "recipientType": "school_office",
      "recipientName": "Registration Office",
      "difficulty": "medium",
      "promptText": "You need to enroll in a required class, but you cannot complete the enrollment online. Write an email to the Registration Office explaining the problem, why you need the class, and asking for help so you can enroll.",
      "requiredPoints": [
        "explain that you cannot enroll in the class online",
        "explain why you need the class",
        "ask for help so you can enroll"
      ],
      "ui": { "introZh": "这道题需要你说明无法在线选课的情况，并请求协助完成选课。", "categoryZh": "解释问题" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Registration Office", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Problem Enrolling in a Class Online", "scaffoldParts": [{ "type": "variable", "text": "Problem Enrolling in a Class Online" }], "hintZh": "主题要简洁、正式。", "required": true, "checkFocus": ["subject_is_clear", "tone_is_appropriate"], "feedbackTips": { "good": "这个主题比较清楚。", "tooVague": "主题可以更明确一些。", "toneTooDirect": "", "missingTaskFit": "主题最好更贴合题目。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Registration Office,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Registration Office," }], "hintZh": "写给学校办公室，称呼要正式。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼合适。", "tooVague": "", "toneTooDirect": "称呼有点太随意。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know that I have encountered a problem enrolling in a required class online.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know that " }, { "type": "variable", "text": "I have encountered a problem enrolling in a required class online." }], "hintZh": "先点明你遇到了选课问题。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这句已经说明了核心问题。", "tooVague": "最好写清楚和什么事情有关。", "toneTooDirect": "", "missingTaskFit": "还没有看出这是和选课相关的问题。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I have tried several times to enroll through the online system, but the system does not complete my registration.", "scaffoldParts": [{ "type": "template", "text": "I have tried several times to enroll through the online system, but " }, { "type": "variable", "text": "the system does not complete my registration." }], "hintZh": "这里写问题本身。", "required": true, "checkFocus": ["explains_problem", "clarity"], "feedbackTips": { "good": "这句把问题交代清楚了。", "tooVague": "问题描述还可以更明确。", "toneTooDirect": "", "missingTaskFit": "这里需要写清楚发生了什么。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "This class is required for my degree, so I need to enroll as soon as possible.", "scaffoldParts": [{ "type": "template", "text": "This class is required for my degree, so " }, { "type": "variable", "text": "I need to enroll as soon as possible." }], "hintZh": "这里写你为什么需要选上这门课。", "required": true, "checkFocus": ["states_consequence", "covers_required_point"], "feedbackTips": { "good": "这句清楚说明了影响。", "tooVague": "影响写得还不够具体。", "toneTooDirect": "", "missingTaskFit": "这里需要说明你为什么需要这门课。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "I was wondering whether it would be possible to get help enrolling in this class, perhaps in person or by another method.", "scaffoldParts": [{ "type": "template", "text": "I was wondering whether it would be possible to " }, { "type": "variable", "text": "get help enrolling in this class, perhaps in person or by another method." }], "hintZh": "礼貌地请求协助选课。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很礼貌。", "tooVague": "你的请求还不够具体。", "toneTooDirect": "可以更委婉一些。", "missingTaskFit": "这里还没有明确提出请求帮助选课。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for your understanding and consideration.", "scaffoldParts": [{ "type": "template", "text": "Thank you for your understanding and consideration." }], "hintZh": "这个场景下，这样的结尾很合适。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然、得体。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Registration Office,\n\nI'm writing to let you know that I have encountered a problem enrolling in a required class online. I have tried several times but the system does not complete my registration. This class is required for my degree. I was wondering whether it would be possible to get help enrolling, perhaps in person.\n\nThank you for your understanding and consideration.",
        "band5Like": "Dear Registration Office,\n\nI'm writing to let you know that I have encountered a problem enrolling in a required class online. I have tried several times to enroll through the online system, but the system does not complete my registration. This class is required for my degree, so I need to enroll as soon as possible. I was wondering whether it would be possible to get help enrolling in this class, perhaps in person or by another method.\n\nThank you for your understanding and consideration."
      },
      "commonMistakesZh": [
        "只说了选不上，没说明是必修或为什么需要",
        "没有明确请求对方协助选课",
        "语气太直接"
      ]
    },
    {
      "id": "email_012",
      "category": "explain_a_problem",
      "recipientType": "school_office",
      "recipientName": "Campus Health Center",
      "difficulty": "medium",
      "promptText": "You have an appointment at the campus health center, but a transportation problem may cause you to arrive late. Write an email to the health center explaining the situation, apologizing for the inconvenience, and asking whether it is still possible to be seen or to reschedule.",
      "requiredPoints": [
        "explain the transportation problem and that you may arrive late",
        "apologize for the inconvenience",
        "ask whether you can still be seen or reschedule"
      ],
      "ui": { "introZh": "这道题需要你说明交通问题可能导致迟到，并礼貌询问是否仍可就诊或改期。", "categoryZh": "解释问题" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Campus Health Center", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Possible Late Arrival for My Appointment", "scaffoldParts": [{ "type": "variable", "text": "Possible Late Arrival for My Appointment" }], "hintZh": "主题要简洁、正式。", "required": true, "checkFocus": ["subject_is_clear", "tone_is_appropriate"], "feedbackTips": { "good": "这个主题比较清楚。", "tooVague": "主题可以更明确一些。", "toneTooDirect": "", "missingTaskFit": "主题最好更贴合题目。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Campus Health Center,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Campus Health Center," }], "hintZh": "写给学校办公室，称呼要正式。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼合适。", "tooVague": "", "toneTooDirect": "称呼有点太随意。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know that I may arrive late for my appointment due to a transportation problem.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know that " }, { "type": "variable", "text": "I may arrive late for my appointment due to a transportation problem." }], "hintZh": "先点明你可能迟到及原因。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这句已经说明了核心问题。", "tooVague": "最好写清楚和什么事情有关。", "toneTooDirect": "", "missingTaskFit": "还没有看出这是和预约迟到相关的问题。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "There is a delay with the bus I take to campus, which may prevent me from arriving on time.", "scaffoldParts": [{ "type": "template", "text": "There is a delay with the bus I take to campus, " }, { "type": "variable", "text": "which may prevent me from arriving on time." }], "hintZh": "这里写交通问题本身。", "required": true, "checkFocus": ["explains_problem", "clarity"], "feedbackTips": { "good": "这句把问题交代清楚了。", "tooVague": "问题描述还可以更明确。", "toneTooDirect": "", "missingTaskFit": "这里需要写清楚发生了什么。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "I am sorry for any inconvenience this may cause.", "scaffoldParts": [{ "type": "template", "text": "I am sorry for any inconvenience " }, { "type": "variable", "text": "this may cause." }], "hintZh": "这里可以表达歉意。", "required": true, "checkFocus": ["states_consequence", "covers_required_point"], "feedbackTips": { "good": "这句清楚说明了态度。", "tooVague": "可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要表达歉意。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "I was wondering whether it would be possible to still be seen if I arrive a bit late, or to reschedule my appointment.", "scaffoldParts": [{ "type": "template", "text": "I was wondering whether it would be possible to " }, { "type": "variable", "text": "still be seen if I arrive a bit late, or to reschedule my appointment." }], "hintZh": "礼貌地询问是否仍可就诊或改期。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很礼貌。", "tooVague": "你的请求还不够具体。", "toneTooDirect": "可以更委婉一些。", "missingTaskFit": "这里还没有明确提出是否仍可就诊或改期。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for your understanding and consideration.", "scaffoldParts": [{ "type": "template", "text": "Thank you for your understanding and consideration." }], "hintZh": "这个场景下，这样的结尾很合适。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然、得体。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Campus Health Center,\n\nI'm writing to let you know that I may arrive late for my appointment due to a transportation problem. The bus I take to campus is delayed. I am sorry for any inconvenience. I was wondering whether it would be possible to still be seen if I arrive a bit late, or to reschedule.\n\nThank you for your understanding and consideration.",
        "band5Like": "Dear Campus Health Center,\n\nI'm writing to let you know that I may arrive late for my appointment due to a transportation problem. There is a delay with the bus I take to campus, which may prevent me from arriving on time. I am sorry for any inconvenience this may cause. I was wondering whether it would be possible to still be seen if I arrive a bit late, or to reschedule my appointment.\n\nThank you for your understanding and consideration."
      },
      "commonMistakesZh": [
        "只说了可能迟到，没有说明是交通问题",
        "没有道歉或没有询问是否仍可就诊/改期",
        "语气太直接"
      ]
    },
    {
      "id": "email_013",
      "category": "explain_a_problem",
      "recipientType": "classmate",
      "recipientName": "Alex (Club President)",
      "difficulty": "medium",
      "promptText": "You had agreed to help at a club event, but a schedule conflict now prevents you from attending. Write an email to the club president explaining the conflict, apologizing for the inconvenience, and offering to help in another way if possible.",
      "requiredPoints": [
        "explain the schedule conflict that prevents you from helping",
        "apologize for the inconvenience",
        "offer to help in another way if possible"
      ],
      "ui": { "introZh": "这道题需要你说明时间冲突无法到场帮忙，并道歉、提出其他协助方式。", "categoryZh": "解释问题" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Alex (Club President)", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Schedule Conflict – Cannot Help at the Event", "scaffoldParts": [{ "type": "variable", "text": "Schedule Conflict – Cannot Help at the Event" }], "hintZh": "主题要简洁、正式。", "required": true, "checkFocus": ["subject_is_clear", "tone_is_appropriate"], "feedbackTips": { "good": "这个主题比较清楚。", "tooVague": "主题可以更明确一些。", "toneTooDirect": "", "missingTaskFit": "主题最好更贴合题目。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Alex,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Alex," }], "hintZh": "写给社团负责人，称呼得体即可。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼合适。", "tooVague": "", "toneTooDirect": "称呼有点太随意。", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know that I have run into a schedule conflict and will not be able to help at the event as planned.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know that " }, { "type": "variable", "text": "I have run into a schedule conflict and will not be able to help at the event as planned." }], "hintZh": "先点明你无法按计划帮忙。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这句已经说明了核心问题。", "tooVague": "最好写清楚和什么事情有关。", "toneTooDirect": "", "missingTaskFit": "还没有看出这是和活动帮忙相关的问题。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "A mandatory class activity has been scheduled at the same time as the event, so I cannot be there.", "scaffoldParts": [{ "type": "template", "text": "A mandatory class activity has been scheduled at the same time as the event, " }, { "type": "variable", "text": "so I cannot be there." }], "hintZh": "这里写时间冲突本身。", "required": true, "checkFocus": ["explains_problem", "clarity"], "feedbackTips": { "good": "这句把问题交代清楚了。", "tooVague": "问题描述还可以更明确。", "toneTooDirect": "", "missingTaskFit": "这里需要写清楚发生了什么。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "I am very sorry for any inconvenience this may cause the club.", "scaffoldParts": [{ "type": "template", "text": "I am very sorry for any inconvenience " }, { "type": "variable", "text": "this may cause the club." }], "hintZh": "这里表达歉意。", "required": true, "checkFocus": ["states_consequence", "covers_required_point"], "feedbackTips": { "good": "这句清楚表达了歉意。", "tooVague": "可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要表达歉意。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "I was wondering whether it would be possible to help in another way, for example with preparation before the event or follow-up afterward.", "scaffoldParts": [{ "type": "template", "text": "I was wondering whether it would be possible to " }, { "type": "variable", "text": "help in another way, for example with preparation before the event or follow-up afterward." }], "hintZh": "礼貌地提出其他帮忙方式。", "required": true, "checkFocus": ["clear_request", "polite_request", "covers_required_point"], "feedbackTips": { "good": "请求表达得很礼貌。", "tooVague": "你的请求还不够具体。", "toneTooDirect": "可以更委婉一些。", "missingTaskFit": "这里还没有提出其他帮忙方式。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for your understanding and consideration.", "scaffoldParts": [{ "type": "template", "text": "Thank you for your understanding and consideration." }], "hintZh": "这个场景下，这样的结尾很合适。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然、得体。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Alex,\n\nI'm writing to let you know that I have run into a schedule conflict and will not be able to help at the event as planned. A mandatory class activity has been scheduled at the same time. I am very sorry for any inconvenience. I was wondering whether I could help in another way, for example before or after the event.\n\nThank you for your understanding and consideration.",
        "band5Like": "Dear Alex,\n\nI'm writing to let you know that I have run into a schedule conflict and will not be able to help at the event as planned. A mandatory class activity has been scheduled at the same time as the event, so I cannot be there. I am very sorry for any inconvenience this may cause the club. I was wondering whether it would be possible to help in another way, for example with preparation before the event or follow-up afterward.\n\nThank you for your understanding and consideration."
      },
      "commonMistakesZh": [
        "只说不去了，没说明是时间冲突",
        "没有道歉或没有提出其他帮忙方式",
        "语气太随意"
      ]
    },
    {
      "id": "email_014",
      "category": "make_a_suggestion",
      "recipientType": "school_office",
      "recipientName": "Library Director",
      "difficulty": "medium",
      "promptText": "The campus library is looking for ways to better serve students. Write an email to the library director suggesting one improvement to library services, explaining why it would be helpful, and describing how it could benefit students.",
      "requiredPoints": [
        "suggest one improvement to library services",
        "explain why it would be helpful",
        "describe how it could benefit students"
      ],
      "ui": { "introZh": "这道题需要你向图书馆提出一项服务改进建议，并说明理由与受益。", "categoryZh": "提出建议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Library Director", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Suggestion for Improving Library Services", "scaffoldParts": [{ "type": "variable", "text": "Suggestion for Improving Library Services" }], "hintZh": "主题最好点明是建议。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "主题很清楚。", "tooVague": "主题还可以更明确。", "toneTooDirect": "", "missingTaskFit": "最好让人一眼看出这是一封建议邮件。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Library Director,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Library Director," }], "hintZh": "写给工作人员时，这样称呼比较稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to suggest that extending evening opening hours could be incredibly helpful for students.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to suggest that " }, { "type": "variable", "text": "extending evening opening hours could be incredibly helpful for students." }], "hintZh": "这里直接提出建议。", "required": true, "checkFocus": ["purpose_is_clear", "states_suggestion"], "feedbackTips": { "good": "建议表达得很清楚。", "tooVague": "这里应该直接说出你的建议。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确提出建议。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "One reason I believe this would be especially beneficial is that many students have classes during the day and can only study in the evening.", "scaffoldParts": [{ "type": "template", "text": "One reason I believe this would be especially beneficial is that " }, { "type": "variable", "text": "many students have classes during the day and can only study in the evening." }], "hintZh": "这里给出第一个理由。", "required": true, "checkFocus": ["gives_reason", "clarity"], "feedbackTips": { "good": "理由表达得比较自然。", "tooVague": "理由还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要说明为什么这个建议有帮助。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "In addition, this change could improve academic performance, since students would have a quiet place to study after dinner.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "this change could improve academic performance, since students would have a quiet place to study after dinner." }], "hintZh": "这里写这个建议会带来什么好处。", "required": true, "checkFocus": ["states_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了受益点。", "tooVague": "这里的好处可以说得更具体。", "toneTooDirect": "", "missingTaskFit": "这里需要写出这个建议会如何帮助学生。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "For these reasons, I sincerely hope you will consider this suggestion.", "scaffoldParts": [{ "type": "template", "text": "For these reasons, I sincerely hope you will consider this suggestion." }], "hintZh": "礼貌总结并表达希望对方考虑。", "required": true, "checkFocus": ["polite_conclusion", "fits_category"], "feedbackTips": { "good": "总结很自然。", "tooVague": "", "toneTooDirect": "这里可以再礼貌一些。", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for taking the time to read my email.", "scaffoldParts": [{ "type": "template", "text": "Thank you for taking the time to read my email." }], "hintZh": "简洁礼貌即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾合适。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Library Director,\n\nI'm writing to suggest that extending evening opening hours could be incredibly helpful for students. One reason is that many students have classes during the day and can only study in the evening. In addition, this change could improve academic performance. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email.",
        "band5Like": "Dear Library Director,\n\nI'm writing to suggest that extending evening opening hours could be incredibly helpful for students. One reason I believe this would be especially beneficial is that many students have classes during the day and can only study in the evening. In addition, this change could improve academic performance, since students would have a quiet place to study after dinner. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email."
      },
      "commonMistakesZh": [
        "提出建议后没有解释为什么有帮助",
        "只写一个好处，没有写对学生的具体影响",
        "建议写得太空，没有具体内容"
      ]
    },
    {
      "id": "email_015",
      "category": "make_a_suggestion",
      "recipientType": "school_office",
      "recipientName": "Student Center Manager",
      "difficulty": "medium",
      "promptText": "The university wants to make campus more welcoming for new students. Write an email to the student center manager suggesting one change to the student center or its programs, explaining why it would help new students, and describing how it could make campus feel more welcoming.",
      "requiredPoints": [
        "suggest one change to the student center or its programs",
        "explain why it would help new students",
        "describe how it could make campus more welcoming"
      ],
      "ui": { "introZh": "这道题需要你向学生中心提出一项改进建议，让新生更易融入校园。", "categoryZh": "提出建议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Student Center Manager", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Suggestion for Welcoming New Students", "scaffoldParts": [{ "type": "variable", "text": "Suggestion for Welcoming New Students" }], "hintZh": "主题最好点明是建议。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "主题很清楚。", "tooVague": "主题还可以更明确。", "toneTooDirect": "", "missingTaskFit": "最好让人一眼看出这是一封建议邮件。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Student Center Manager,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Student Center Manager," }], "hintZh": "写给工作人员时，这样称呼比较稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to suggest that hosting a weekly welcome coffee for new students could be incredibly helpful.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to suggest that " }, { "type": "variable", "text": "hosting a weekly welcome coffee for new students could be incredibly helpful." }], "hintZh": "这里直接提出建议。", "required": true, "checkFocus": ["purpose_is_clear", "states_suggestion"], "feedbackTips": { "good": "建议表达得很清楚。", "tooVague": "这里应该直接说出你的建议。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确提出建议。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "One reason I believe this would be especially beneficial is that new students often feel lost and would benefit from a regular chance to meet others.", "scaffoldParts": [{ "type": "template", "text": "One reason I believe this would be especially beneficial is that " }, { "type": "variable", "text": "new students often feel lost and would benefit from a regular chance to meet others." }], "hintZh": "这里给出第一个理由。", "required": true, "checkFocus": ["gives_reason", "clarity"], "feedbackTips": { "good": "理由表达得比较自然。", "tooVague": "理由还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要说明为什么这个建议有帮助。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "In addition, this could make campus feel more welcoming, since new students would have a place to ask questions and make friends.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "this could make campus feel more welcoming, since new students would have a place to ask questions and make friends." }], "hintZh": "这里写这个建议会带来什么好处。", "required": true, "checkFocus": ["states_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了受益点。", "tooVague": "这里的好处可以说得更具体。", "toneTooDirect": "", "missingTaskFit": "这里需要写出这个建议会如何让校园更 welcoming。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "For these reasons, I sincerely hope you will consider this suggestion.", "scaffoldParts": [{ "type": "template", "text": "For these reasons, I sincerely hope you will consider this suggestion." }], "hintZh": "礼貌总结并表达希望对方考虑。", "required": true, "checkFocus": ["polite_conclusion", "fits_category"], "feedbackTips": { "good": "总结很自然。", "tooVague": "", "toneTooDirect": "这里可以再礼貌一些。", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for taking the time to read my email.", "scaffoldParts": [{ "type": "template", "text": "Thank you for taking the time to read my email." }], "hintZh": "简洁礼貌即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾合适。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Student Center Manager,\n\nI'm writing to suggest that hosting a weekly welcome coffee for new students could be incredibly helpful. New students often feel lost and would benefit from a chance to meet others. In addition, this could make campus feel more welcoming. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email.",
        "band5Like": "Dear Student Center Manager,\n\nI'm writing to suggest that hosting a weekly welcome coffee for new students could be incredibly helpful. One reason I believe this would be especially beneficial is that new students often feel lost and would benefit from a regular chance to meet others. In addition, this could make campus feel more welcoming, since new students would have a place to ask questions and make friends. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email."
      },
      "commonMistakesZh": [
        "提出建议后没有解释为什么对新生有帮助",
        "没有写如何让校园更 welcoming",
        "建议写得太空"
      ]
    },
    {
      "id": "email_016",
      "category": "make_a_suggestion",
      "recipientType": "school_office",
      "recipientName": "Campus Gym Manager",
      "difficulty": "medium",
      "promptText": "The campus gym is considering improvements. Write an email to the gym manager suggesting one change to the facilities or schedule, explaining why it would be helpful, and describing how it could benefit students.",
      "requiredPoints": [
        "suggest one change to the gym facilities or schedule",
        "explain why it would be helpful",
        "describe how it could benefit students"
      ],
      "ui": { "introZh": "这道题需要你向体育馆提出一项设施或安排改进建议，并说明理由与受益。", "categoryZh": "提出建议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Campus Gym Manager", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Suggestion for Improving Gym Facilities", "scaffoldParts": [{ "type": "variable", "text": "Suggestion for Improving Gym Facilities" }], "hintZh": "主题最好点明是建议。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "主题很清楚。", "tooVague": "主题还可以更明确。", "toneTooDirect": "", "missingTaskFit": "最好让人一眼看出这是一封建议邮件。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Campus Gym Manager,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Campus Gym Manager," }], "hintZh": "写给工作人员时，这样称呼比较稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to suggest that adding more early-morning hours could be incredibly helpful for students.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to suggest that " }, { "type": "variable", "text": "adding more early-morning hours could be incredibly helpful for students." }], "hintZh": "这里直接提出建议。", "required": true, "checkFocus": ["purpose_is_clear", "states_suggestion"], "feedbackTips": { "good": "建议表达得很清楚。", "tooVague": "这里应该直接说出你的建议。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确提出建议。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "One reason I believe this would be especially beneficial is that many students have busy schedules and can only exercise before class.", "scaffoldParts": [{ "type": "template", "text": "One reason I believe this would be especially beneficial is that " }, { "type": "variable", "text": "many students have busy schedules and can only exercise before class." }], "hintZh": "这里给出第一个理由。", "required": true, "checkFocus": ["gives_reason", "clarity"], "feedbackTips": { "good": "理由表达得比较自然。", "tooVague": "理由还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要说明为什么这个建议有帮助。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "In addition, this change could benefit students' health and stress levels, since more would be able to fit exercise into their day.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "this change could benefit students' health and stress levels, since more would be able to fit exercise into their day." }], "hintZh": "这里写这个建议会带来什么好处。", "required": true, "checkFocus": ["states_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了受益点。", "tooVague": "这里的好处可以说得更具体。", "toneTooDirect": "", "missingTaskFit": "这里需要写出这个建议会如何帮助学生。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "For these reasons, I sincerely hope you will consider this suggestion.", "scaffoldParts": [{ "type": "template", "text": "For these reasons, I sincerely hope you will consider this suggestion." }], "hintZh": "礼貌总结并表达希望对方考虑。", "required": true, "checkFocus": ["polite_conclusion", "fits_category"], "feedbackTips": { "good": "总结很自然。", "tooVague": "", "toneTooDirect": "这里可以再礼貌一些。", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for taking the time to read my email.", "scaffoldParts": [{ "type": "template", "text": "Thank you for taking the time to read my email." }], "hintZh": "简洁礼貌即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾合适。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Campus Gym Manager,\n\nI'm writing to suggest that adding more early-morning hours could be incredibly helpful for students. Many students have busy schedules and can only exercise before class. In addition, this could benefit students' health. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email.",
        "band5Like": "Dear Campus Gym Manager,\n\nI'm writing to suggest that adding more early-morning hours could be incredibly helpful for students. One reason I believe this would be especially beneficial is that many students have busy schedules and can only exercise before class. In addition, this change could benefit students' health and stress levels, since more would be able to fit exercise into their day. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email."
      },
      "commonMistakesZh": [
        "提出建议后没有解释为什么有帮助",
        "没有写对学生的具体好处",
        "建议写得太空"
      ]
    },
    {
      "id": "email_017",
      "category": "make_a_suggestion",
      "recipientType": "school_office",
      "recipientName": "Transportation Office",
      "difficulty": "medium",
      "promptText": "Many students commute to campus. The university is looking for ways to improve commuting. Write an email to the Transportation Office suggesting one change, explaining why it would be helpful, and describing how it could benefit students who commute.",
      "requiredPoints": [
        "suggest one change to improve commuting",
        "explain why it would be helpful",
        "describe how it could benefit commuting students"
      ],
      "ui": { "introZh": "这道题需要你向交通部门提出一项改善通勤的建议，并说明理由与受益。", "categoryZh": "提出建议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Transportation Office", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Suggestion for Improving Student Commuting", "scaffoldParts": [{ "type": "variable", "text": "Suggestion for Improving Student Commuting" }], "hintZh": "主题最好点明是建议。", "required": true, "checkFocus": ["subject_is_clear", "matches_prompt"], "feedbackTips": { "good": "主题很清楚。", "tooVague": "主题还可以更明确。", "toneTooDirect": "", "missingTaskFit": "最好让人一眼看出这是一封建议邮件。" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Transportation Office,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Transportation Office," }], "hintZh": "写给学校办公室时，这样称呼比较稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to suggest that adding more shuttle buses in the early morning could be incredibly helpful for commuting students.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to suggest that " }, { "type": "variable", "text": "adding more shuttle buses in the early morning could be incredibly helpful for commuting students." }], "hintZh": "这里直接提出建议。", "required": true, "checkFocus": ["purpose_is_clear", "states_suggestion"], "feedbackTips": { "good": "建议表达得很清楚。", "tooVague": "这里应该直接说出你的建议。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确提出建议。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "One reason I believe this would be especially beneficial is that many commuting students have to arrive early for class and current shuttles are often full.", "scaffoldParts": [{ "type": "template", "text": "One reason I believe this would be especially beneficial is that " }, { "type": "variable", "text": "many commuting students have to arrive early for class and current shuttles are often full." }], "hintZh": "这里给出第一个理由。", "required": true, "checkFocus": ["gives_reason", "clarity"], "feedbackTips": { "good": "理由表达得比较自然。", "tooVague": "理由还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要说明为什么这个建议有帮助。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "In addition, this change could reduce stress and make it easier for commuting students to get to campus on time.", "scaffoldParts": [{ "type": "template", "text": "In addition, " }, { "type": "variable", "text": "this change could reduce stress and make it easier for commuting students to get to campus on time." }], "hintZh": "这里写这个建议会带来什么好处。", "required": true, "checkFocus": ["states_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了受益点。", "tooVague": "这里的好处可以说得更具体。", "toneTooDirect": "", "missingTaskFit": "这里需要写出这个建议会如何帮助通勤学生。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "For these reasons, I sincerely hope you will consider this suggestion.", "scaffoldParts": [{ "type": "template", "text": "For these reasons, I sincerely hope you will consider this suggestion." }], "hintZh": "礼貌总结并表达希望对方考虑。", "required": true, "checkFocus": ["polite_conclusion", "fits_category"], "feedbackTips": { "good": "总结很自然。", "tooVague": "", "toneTooDirect": "这里可以再礼貌一些。", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Thank you for taking the time to read my email.", "scaffoldParts": [{ "type": "template", "text": "Thank you for taking the time to read my email." }], "hintZh": "简洁礼貌即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾合适。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Transportation Office,\n\nI'm writing to suggest that adding more shuttle buses in the early morning could be incredibly helpful for commuting students. Many students have to arrive early and the shuttles are often full. In addition, this could reduce stress and make it easier to get to campus on time. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email.",
        "band5Like": "Dear Transportation Office,\n\nI'm writing to suggest that adding more shuttle buses in the early morning could be incredibly helpful for commuting students. One reason I believe this would be especially beneficial is that many commuting students have to arrive early for class and current shuttles are often full. In addition, this change could reduce stress and make it easier for commuting students to get to campus on time. For these reasons, I sincerely hope you will consider this suggestion.\n\nThank you for taking the time to read my email."
      },
      "commonMistakesZh": [
        "提出建议后没有解释为什么对通勤学生有帮助",
        "没有写对通勤学生的具体好处",
        "建议写得太空"
      ]
    },
    {
      "id": "email_018",
      "category": "give_information_or_respond",
      "recipientType": "classmate",
      "recipientName": "Jordan",
      "difficulty": "easy",
      "promptText": "You have joined a weekly English conversation group on campus. Your classmate wants to practice English too. Write an email to your classmate explaining what the group is, why you thought of your classmate, and what your classmate should do if interested in joining.",
      "requiredPoints": [
        "explain what the English conversation group is",
        "say why you thought of your classmate",
        "say what your classmate should do if interested"
      ],
      "ui": { "introZh": "这道题需要你把英语角信息告诉同学，并说明为什么适合对方以及如何加入。", "categoryZh": "提供信息 / 回复" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Jordan", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Weekly English Conversation Group on Campus", "scaffoldParts": [{ "type": "variable", "text": "Weekly English Conversation Group on Campus" }], "hintZh": "主题可以直接点出信息内容。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "主题写得很清楚。", "tooVague": "主题还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Jordan,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Jordan," }], "hintZh": "写给同学也可以用 Dear，比较稳。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know about a weekly English conversation group on campus, which could be very useful for you.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know about " }, { "type": "variable", "text": "a weekly English conversation group on campus, which could be very useful for you." }], "hintZh": "先告诉对方你发现了什么信息。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这一句已经交代了核心信息。", "tooVague": "最好写清楚是什么信息。", "toneTooDirect": "", "missingTaskFit": "这里需要说明你发现了什么。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I immediately thought of you because you mentioned that you wanted to practice speaking English more.", "scaffoldParts": [{ "type": "template", "text": "I immediately thought of you because " }, { "type": "variable", "text": "you mentioned that you wanted to practice speaking English more." }], "hintZh": "这里解释为什么想到对方。", "required": true, "checkFocus": ["explains_relevance", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么想到对方。", "tooVague": "原因还可以更具体一点。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么觉得这个活动适合对方。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "From what I know, the group meets every Thursday in the student center and everyone takes turns leading short discussions.", "scaffoldParts": [{ "type": "template", "text": "From what I know, " }, { "type": "variable", "text": "the group meets every Thursday in the student center and everyone takes turns leading short discussions." }], "hintZh": "这里补充你了解到的具体内容。", "required": true, "checkFocus": ["adds_useful_information", "clarity"], "feedbackTips": { "good": "补充信息比较有帮助。", "tooVague": "这部分还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里最好补充一下你找到的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "If you are interested, I think you should come to the next meeting or email the group leader to join.", "scaffoldParts": [{ "type": "template", "text": "If you are interested, " }, { "type": "variable", "text": "I think you should come to the next meeting or email the group leader to join." }], "hintZh": "这里写对方下一步可以做什么。", "required": true, "checkFocus": ["clear_next_step", "covers_required_point"], "feedbackTips": { "good": "下一步建议写得很清楚。", "tooVague": "最好明确告诉对方应该做什么。", "toneTooDirect": "", "missingTaskFit": "这里还没有说明对方下一步该怎么做。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like any additional information.", "scaffoldParts": [{ "type": "template", "text": "Please let me know if you would like any additional information." }], "hintZh": "结尾也可以继续表示愿意帮忙。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾很自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Jordan,\n\nI'm writing to let you know about a weekly English conversation group on campus, which could be very useful for you. I immediately thought of you because you said you wanted to practice English. From what I know, the group meets every Thursday in the student center. If you are interested, I think you should come to the next meeting or email the group leader.\n\nPlease let me know if you would like any additional information.",
        "band5Like": "Dear Jordan,\n\nI'm writing to let you know about a weekly English conversation group on campus, which could be very useful for you. I immediately thought of you because you mentioned that you wanted to practice speaking English more. From what I know, the group meets every Thursday in the student center and everyone takes turns leading short discussions. If you are interested, I think you should come to the next meeting or email the group leader to join.\n\nPlease let me know if you would like any additional information."
      },
      "commonMistakesZh": [
        "只说了有个英语角，没有描述时间地点或形式",
        "没有解释为什么想到这个同学",
        "没有告诉对方下一步应该做什么"
      ]
    },
    {
      "id": "email_019",
      "category": "give_information_or_respond",
      "recipientType": "classmate",
      "recipientName": "Sam",
      "difficulty": "easy",
      "promptText": "A new printing station has opened in the student center. Your classmate often needs to print assignments. Write an email to your classmate explaining what you learned about the new station, why you thought of your classmate, and what your classmate should do to use it.",
      "requiredPoints": [
        "explain what the new printing station is / where it is",
        "say why you thought of your classmate",
        "say what your classmate should do to use it"
      ],
      "ui": { "introZh": "这道题需要你把新打印站信息告诉同学，并说明为什么适合对方以及如何使用。", "categoryZh": "提供信息 / 回复" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Sam", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "New Printing Station in the Student Center", "scaffoldParts": [{ "type": "variable", "text": "New Printing Station in the Student Center" }], "hintZh": "主题可以直接点出信息内容。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "主题写得很清楚。", "tooVague": "主题还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Sam,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Sam," }], "hintZh": "写给同学也可以用 Dear，比较稳。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know about a new printing station in the student center, which could be very useful for you.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know about " }, { "type": "variable", "text": "a new printing station in the student center, which could be very useful for you." }], "hintZh": "先告诉对方你发现了什么信息。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这一句已经交代了核心信息。", "tooVague": "最好写清楚是什么信息。", "toneTooDirect": "", "missingTaskFit": "这里需要说明你发现了什么。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I immediately thought of you because you often need to print assignments and the library printers are usually busy.", "scaffoldParts": [{ "type": "template", "text": "I immediately thought of you because " }, { "type": "variable", "text": "you often need to print assignments and the library printers are usually busy." }], "hintZh": "这里解释为什么想到对方。", "required": true, "checkFocus": ["explains_relevance", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么想到对方。", "tooVague": "原因还可以更具体一点。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么觉得这个信息适合对方。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "From what I heard, the new station is on the first floor and you can pay with your student card.", "scaffoldParts": [{ "type": "template", "text": "From what I heard, " }, { "type": "variable", "text": "the new station is on the first floor and you can pay with your student card." }], "hintZh": "这里补充你了解到的具体内容。", "required": true, "checkFocus": ["adds_useful_information", "clarity"], "feedbackTips": { "good": "补充信息比较有帮助。", "tooVague": "这部分还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里最好补充一下你找到的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "If you want to use it, I think you should bring your student card and check the opening hours on the student center website.", "scaffoldParts": [{ "type": "template", "text": "If you want to use it, " }, { "type": "variable", "text": "I think you should bring your student card and check the opening hours on the student center website." }], "hintZh": "这里写对方下一步可以做什么。", "required": true, "checkFocus": ["clear_next_step", "covers_required_point"], "feedbackTips": { "good": "下一步建议写得很清楚。", "tooVague": "最好明确告诉对方应该做什么。", "toneTooDirect": "", "missingTaskFit": "这里还没有说明对方下一步该怎么做。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like any additional information.", "scaffoldParts": [{ "type": "template", "text": "Please let me know if you would like any additional information." }], "hintZh": "结尾也可以继续表示愿意帮忙。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾很自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Sam,\n\nI'm writing to let you know about a new printing station in the student center, which could be very useful for you. I immediately thought of you because you often need to print. From what I heard, it's on the first floor and you can pay with your student card. If you want to use it, check the opening hours on the website.\n\nPlease let me know if you would like any additional information.",
        "band5Like": "Dear Sam,\n\nI'm writing to let you know about a new printing station in the student center, which could be very useful for you. I immediately thought of you because you often need to print assignments and the library printers are usually busy. From what I heard, the new station is on the first floor and you can pay with your student card. If you want to use it, I think you should bring your student card and check the opening hours on the student center website.\n\nPlease let me know if you would like any additional information."
      },
      "commonMistakesZh": [
        "只说了有新打印站，没有描述地点或使用方式",
        "没有解释为什么想到这个同学",
        "没有告诉对方下一步应该做什么"
      ]
    },
    {
      "id": "email_020",
      "category": "give_information_or_respond",
      "recipientType": "classmate",
      "recipientName": "Casey",
      "difficulty": "easy",
      "promptText": "There will be an evening music performance on campus next week. Your classmate likes live music. Write an email to your classmate explaining what you found out about the performance, why you thought of your classmate, and what your classmate should do if interested in attending.",
      "requiredPoints": [
        "explain what the music performance is / when and where",
        "say why you thought of your classmate",
        "say what your classmate should do if interested"
      ],
      "ui": { "introZh": "这道题需要你把校园音乐会信息告诉同学，并说明为什么适合对方以及如何参加。", "categoryZh": "提供信息 / 回复" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Casey", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Evening Music Performance on Campus Next Week", "scaffoldParts": [{ "type": "variable", "text": "Evening Music Performance on Campus Next Week" }], "hintZh": "主题可以直接点出信息内容。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "主题写得很清楚。", "tooVague": "主题还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Casey,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Casey," }], "hintZh": "写给同学也可以用 Dear，比较稳。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know about an evening music performance on campus next week, which I thought you might enjoy.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know about " }, { "type": "variable", "text": "an evening music performance on campus next week, which I thought you might enjoy." }], "hintZh": "先告诉对方你发现了什么信息。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这一句已经交代了核心信息。", "tooVague": "最好写清楚是什么信息。", "toneTooDirect": "", "missingTaskFit": "这里需要说明你发现了什么。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I immediately thought of you because you always enjoy live music and campus events.", "scaffoldParts": [{ "type": "template", "text": "I immediately thought of you because " }, { "type": "variable", "text": "you always enjoy live music and campus events." }], "hintZh": "这里解释为什么想到对方。", "required": true, "checkFocus": ["explains_relevance", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么想到对方。", "tooVague": "原因还可以更具体一点。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么觉得这个活动适合对方。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "From what I heard, it will be in the main hall on Friday at 7 p.m. and tickets are free for students.", "scaffoldParts": [{ "type": "template", "text": "From what I heard, " }, { "type": "variable", "text": "it will be in the main hall on Friday at 7 p.m. and tickets are free for students." }], "hintZh": "这里补充你了解到的具体内容。", "required": true, "checkFocus": ["adds_useful_information", "clarity"], "feedbackTips": { "good": "补充信息比较有帮助。", "tooVague": "这部分还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里最好补充一下你找到的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "If you are interested, I think you should get a ticket at the student center or register online before the event.", "scaffoldParts": [{ "type": "template", "text": "If you are interested, " }, { "type": "variable", "text": "I think you should get a ticket at the student center or register online before the event." }], "hintZh": "这里写对方下一步可以做什么。", "required": true, "checkFocus": ["clear_next_step", "covers_required_point"], "feedbackTips": { "good": "下一步建议写得很清楚。", "tooVague": "最好明确告诉对方应该做什么。", "toneTooDirect": "", "missingTaskFit": "这里还没有说明对方下一步该怎么做。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like any additional information.", "scaffoldParts": [{ "type": "template", "text": "Please let me know if you would like any additional information." }], "hintZh": "结尾也可以继续表示愿意帮忙。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾很自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Casey,\n\nI'm writing to let you know about an evening music performance on campus next week, which I thought you might enjoy. I immediately thought of you because you like live music. From what I heard, it will be in the main hall on Friday at 7 p.m. and tickets are free for students. If you are interested, get a ticket at the student center or register online.\n\nPlease let me know if you would like any additional information.",
        "band5Like": "Dear Casey,\n\nI'm writing to let you know about an evening music performance on campus next week, which I thought you might enjoy. I immediately thought of you because you always enjoy live music and campus events. From what I heard, it will be in the main hall on Friday at 7 p.m. and tickets are free for students. If you are interested, I think you should get a ticket at the student center or register online before the event.\n\nPlease let me know if you would like any additional information."
      },
      "commonMistakesZh": [
        "只说了有音乐会，没有写时间地点或如何取票",
        "没有解释为什么想到这个同学",
        "没有告诉对方下一步应该做什么"
      ]
    },
    {
      "id": "email_021",
      "category": "give_information_or_respond",
      "recipientType": "classmate",
      "recipientName": "Taylor",
      "difficulty": "medium",
      "promptText": "A professor in your department is looking for research assistants. Your classmate is interested in research. Write an email to your classmate explaining what you found out about the opportunity, why you thought of your classmate, and what your classmate should do next if interested.",
      "requiredPoints": [
        "explain what the research assistant opportunity is",
        "say why you thought of your classmate",
        "say what your classmate should do next if interested"
      ],
      "ui": { "introZh": "这道题需要你把教授招研究助理的信息告诉同学，并说明为什么适合对方以及下一步怎么做。", "categoryZh": "提供信息 / 回复" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Taylor", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Professor Seeking Research Assistants", "scaffoldParts": [{ "type": "variable", "text": "Professor Seeking Research Assistants" }], "hintZh": "主题可以直接点出信息内容。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "主题写得很清楚。", "tooVague": "主题还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Taylor,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Taylor," }], "hintZh": "写给同学也可以用 Dear，比较稳。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to let you know about a research assistant opportunity with a professor in our department, which could be very useful for you.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to let you know about " }, { "type": "variable", "text": "a research assistant opportunity with a professor in our department, which could be very useful for you." }], "hintZh": "先告诉对方你发现了什么信息。", "required": true, "checkFocus": ["purpose_is_clear", "matches_prompt"], "feedbackTips": { "good": "这一句已经交代了核心信息。", "tooVague": "最好写清楚是什么信息。", "toneTooDirect": "", "missingTaskFit": "这里需要说明你发现了什么。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I immediately thought of you because you mentioned that you were interested in getting research experience.", "scaffoldParts": [{ "type": "template", "text": "I immediately thought of you because " }, { "type": "variable", "text": "you mentioned that you were interested in getting research experience." }], "hintZh": "这里解释为什么想到对方。", "required": true, "checkFocus": ["explains_relevance", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么想到对方。", "tooVague": "原因还可以更具体一点。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么觉得这个机会适合对方。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "From what I heard, the professor is looking for two or three students to help with data collection and literature review this semester.", "scaffoldParts": [{ "type": "template", "text": "From what I heard, " }, { "type": "variable", "text": "the professor is looking for two or three students to help with data collection and literature review this semester." }], "hintZh": "这里补充你了解到的具体内容。", "required": true, "checkFocus": ["adds_useful_information", "clarity"], "feedbackTips": { "good": "补充信息比较有帮助。", "tooVague": "这部分还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里最好补充一下你找到的具体信息。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "If you are interested, I think you should email the professor or stop by their office to learn more and apply.", "scaffoldParts": [{ "type": "template", "text": "If you are interested, " }, { "type": "variable", "text": "I think you should email the professor or stop by their office to learn more and apply." }], "hintZh": "这里写对方下一步可以做什么。", "required": true, "checkFocus": ["clear_next_step", "covers_required_point"], "feedbackTips": { "good": "下一步建议写得很清楚。", "tooVague": "最好明确告诉对方应该做什么。", "toneTooDirect": "", "missingTaskFit": "这里还没有说明对方下一步该怎么做。" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like any additional information.", "scaffoldParts": [{ "type": "template", "text": "Please let me know if you would like any additional information." }], "hintZh": "结尾也可以继续表示愿意帮忙。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾很自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Taylor,\n\nI'm writing to let you know about a research assistant opportunity with a professor in our department, which could be very useful for you. I immediately thought of you because you said you wanted research experience. From what I heard, the professor is looking for students to help with data and literature review. If you are interested, I think you should email the professor or stop by their office.\n\nPlease let me know if you would like any additional information.",
        "band5Like": "Dear Taylor,\n\nI'm writing to let you know about a research assistant opportunity with a professor in our department, which could be very useful for you. I immediately thought of you because you mentioned that you were interested in getting research experience. From what I heard, the professor is looking for two or three students to help with data collection and literature review this semester. If you are interested, I think you should email the professor or stop by their office to learn more and apply.\n\nPlease let me know if you would like any additional information."
      },
      "commonMistakesZh": [
        "只说了教授在招人，没有描述工作内容或如何申请",
        "没有解释为什么想到这个同学",
        "没有告诉对方下一步应该做什么"
      ]
    },
    {
      "id": "email_022",
      "category": "invite_or_propose",
      "recipientType": "classmate",
      "recipientName": "Morgan",
      "difficulty": "easy",
      "promptText": "A campus career talk will take place next week. Write an email to your classmate inviting them to attend with you, explaining why you think they would find it useful, and describing one benefit of going together.",
      "requiredPoints": [
        "invite your classmate to the career talk",
        "explain why they would find it useful",
        "describe one benefit of going together"
      ],
      "ui": { "introZh": "这道题需要你邀请同学一起参加校园职业讲座，并说明为什么对方会受益。", "categoryZh": "邀请 / 提议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Morgan", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Would You Like to Attend the Campus Career Talk?", "scaffoldParts": [{ "type": "variable", "text": "Would You Like to Attend the Campus Career Talk?" }], "hintZh": "主题可以稍微自然一点，但仍要清楚。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "这个主题自然又清楚。", "tooVague": "主题还可以更具体。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Morgan,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Morgan," }], "hintZh": "写给同学，用 Dear 很稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to invite you to the campus career talk next week, because I think it would be a valuable experience for both of us.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to invite you to " }, { "type": "variable", "text": "the campus career talk next week, because I think it would be a valuable experience for both of us." }], "hintZh": "这里直接发出邀请。", "required": true, "checkFocus": ["purpose_is_clear", "states_invitation"], "feedbackTips": { "good": "邀请表达得很明确。", "tooVague": "这里需要直接写出你想邀请对方做什么。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确发出邀请。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I thought you might especially enjoy it since you have been thinking about internships and career options.", "hintZh": "这里解释为什么你觉得对方会觉得有用。", "required": true, "checkFocus": ["explains_interest", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么对方会感兴趣。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么对方会觉得有用。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "It would also give us a great chance to discuss what we learn and share ideas afterward.", "scaffoldParts": [{ "type": "template", "text": "It would also give us a great chance to " }, { "type": "variable", "text": "discuss what we learn and share ideas afterward." }], "hintZh": "这里写一起去的好处。", "required": true, "checkFocus": ["states_shared_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了「一起去」的好处。", "tooVague": "这里还可以把好处写得更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要写「一起参加」有什么好处。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like to join me.", "hintZh": "邀请后自然地请对方回复。", "required": true, "checkFocus": ["clear_next_step", "polite_request"], "feedbackTips": { "good": "这一句很自然。", "tooVague": "最好明确请对方回复。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "I hope to hear from you soon.", "scaffoldParts": [{ "type": "template", "text": "I hope to hear from you soon." }], "hintZh": "简短、自然即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Morgan,\n\nI'm writing to invite you to the campus career talk next week, because I think it would be a valuable experience for both of us. I thought you might enjoy it since you have been thinking about internships. It would also give us a chance to discuss what we learn. Please let me know if you would like to join me.\n\nI hope to hear from you soon.",
        "band5Like": "Dear Morgan,\n\nI'm writing to invite you to the campus career talk next week, because I think it would be a valuable experience for both of us. I thought you might especially enjoy it since you have been thinking about internships and career options. It would also give us a great chance to discuss what we learn and share ideas afterward. Please let me know if you would like to join me.\n\nI hope to hear from you soon."
      },
      "commonMistakesZh": [
        "只发出邀请，没有解释为什么对方会觉得有用",
        "没有写一起去的好处",
        "语言太像口语聊天，不像邮件"
      ]
    },
    {
      "id": "email_023",
      "category": "invite_or_propose",
      "recipientType": "classmate",
      "recipientName": "Riley",
      "difficulty": "easy",
      "promptText": "A photography exhibit is opening at the campus gallery this weekend. Write an email to your classmate inviting them to go with you, explaining why you think they would enjoy it, and describing one benefit of going together.",
      "requiredPoints": [
        "invite your classmate to the photography exhibit",
        "explain why they would enjoy it",
        "describe one benefit of going together"
      ],
      "ui": { "introZh": "这道题需要你邀请同学一起去看校园摄影展，并解释为什么对方会喜欢。", "categoryZh": "邀请 / 提议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Riley", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Would You Like to Go to the Photography Exhibit?", "scaffoldParts": [{ "type": "variable", "text": "Would You Like to Go to the Photography Exhibit?" }], "hintZh": "主题可以稍微自然一点，但仍要清楚。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "这个主题自然又清楚。", "tooVague": "主题还可以更具体。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Riley,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Riley," }], "hintZh": "写给同学，用 Dear 很稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to invite you to the photography exhibit at the campus gallery this weekend, because I think it would be a valuable experience for both of us.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to invite you to " }, { "type": "variable", "text": "the photography exhibit at the campus gallery this weekend, because I think it would be a valuable experience for both of us." }], "hintZh": "这里直接发出邀请。", "required": true, "checkFocus": ["purpose_is_clear", "states_invitation"], "feedbackTips": { "good": "邀请表达得很明确。", "tooVague": "这里需要直接写出你想邀请对方做什么。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确发出邀请。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I thought you might especially enjoy it since you are interested in photography and art.", "hintZh": "这里解释为什么你觉得对方会喜欢。", "required": true, "checkFocus": ["explains_interest", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么对方会感兴趣。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么对方会喜欢这个活动。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "It would also give us a great chance to spend time together and talk about the photos we like.", "scaffoldParts": [{ "type": "template", "text": "It would also give us a great chance to " }, { "type": "variable", "text": "spend time together and talk about the photos we like." }], "hintZh": "这里写一起去的好处。", "required": true, "checkFocus": ["states_shared_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了「一起去」的好处。", "tooVague": "这里还可以把好处写得更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要写「一起参加」有什么好处。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like to join me this weekend.", "hintZh": "邀请后自然地请对方回复。", "required": true, "checkFocus": ["clear_next_step", "polite_request"], "feedbackTips": { "good": "这一句很自然。", "tooVague": "最好明确请对方回复。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "I hope to hear from you soon.", "scaffoldParts": [{ "type": "template", "text": "I hope to hear from you soon." }], "hintZh": "简短、自然即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Riley,\n\nI'm writing to invite you to the photography exhibit at the campus gallery this weekend, because I think it would be a valuable experience for both of us. I thought you might enjoy it since you like photography. It would also give us a chance to spend time together. Please let me know if you would like to join me this weekend.\n\nI hope to hear from you soon.",
        "band5Like": "Dear Riley,\n\nI'm writing to invite you to the photography exhibit at the campus gallery this weekend, because I think it would be a valuable experience for both of us. I thought you might especially enjoy it since you are interested in photography and art. It would also give us a great chance to spend time together and talk about the photos we like. Please let me know if you would like to join me this weekend.\n\nI hope to hear from you soon."
      },
      "commonMistakesZh": [
        "只发出邀请，没有解释为什么对方会喜欢",
        "没有写一起去的好处",
        "语言太像口语聊天，不像邮件"
      ]
    },
    {
      "id": "email_024",
      "category": "invite_or_propose",
      "recipientType": "classmate",
      "recipientName": "Jordan",
      "difficulty": "easy",
      "promptText": "A student leadership workshop will be held on campus next month. Write an email to your classmate inviting them to attend with you, explaining why you think they would benefit from it, and describing one benefit of attending together.",
      "requiredPoints": [
        "invite your classmate to the leadership workshop",
        "explain why they would benefit from it",
        "describe one benefit of attending together"
      ],
      "ui": { "introZh": "这道题需要你邀请同学一起参加学生领导力工作坊，并说明为什么对方会受益。", "categoryZh": "邀请 / 提议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Jordan", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Would You Like to Attend the Leadership Workshop?", "scaffoldParts": [{ "type": "variable", "text": "Would You Like to Attend the Leadership Workshop?" }], "hintZh": "主题可以稍微自然一点，但仍要清楚。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "这个主题自然又清楚。", "tooVague": "主题还可以更具体。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Jordan,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Jordan," }], "hintZh": "写给同学，用 Dear 很稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to invite you to the student leadership workshop next month, because I think it would be a valuable experience for both of us.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to invite you to " }, { "type": "variable", "text": "the student leadership workshop next month, because I think it would be a valuable experience for both of us." }], "hintZh": "这里直接发出邀请。", "required": true, "checkFocus": ["purpose_is_clear", "states_invitation"], "feedbackTips": { "good": "邀请表达得很明确。", "tooVague": "这里需要直接写出你想邀请对方做什么。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确发出邀请。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I thought you might especially benefit from it since you are involved in club activities and might want to take on more leadership roles.", "hintZh": "这里解释为什么你觉得对方会受益。", "required": true, "checkFocus": ["explains_interest", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么对方会感兴趣。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么对方会受益。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "It would also give us a great chance to learn together and support each other as we try new things.", "scaffoldParts": [{ "type": "template", "text": "It would also give us a great chance to " }, { "type": "variable", "text": "learn together and support each other as we try new things." }], "hintZh": "这里写一起去的好处。", "required": true, "checkFocus": ["states_shared_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了「一起去」的好处。", "tooVague": "这里还可以把好处写得更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要写「一起参加」有什么好处。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like to attend with me.", "hintZh": "邀请后自然地请对方回复。", "required": true, "checkFocus": ["clear_next_step", "polite_request"], "feedbackTips": { "good": "这一句很自然。", "tooVague": "最好明确请对方回复。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "I hope to hear from you soon.", "scaffoldParts": [{ "type": "template", "text": "I hope to hear from you soon." }], "hintZh": "简短、自然即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Jordan,\n\nI'm writing to invite you to the student leadership workshop next month, because I think it would be a valuable experience for both of us. I thought you might benefit from it since you are involved in clubs. It would also give us a chance to learn together. Please let me know if you would like to attend with me.\n\nI hope to hear from you soon.",
        "band5Like": "Dear Jordan,\n\nI'm writing to invite you to the student leadership workshop next month, because I think it would be a valuable experience for both of us. I thought you might especially benefit from it since you are involved in club activities and might want to take on more leadership roles. It would also give us a great chance to learn together and support each other as we try new things. Please let me know if you would like to attend with me.\n\nI hope to hear from you soon."
      },
      "commonMistakesZh": [
        "只发出邀请，没有解释为什么对方会受益",
        "没有写一起去的好处",
        "语言太像口语聊天，不像邮件"
      ]
    },
    {
      "id": "email_025",
      "category": "invite_or_propose",
      "recipientType": "classmate",
      "recipientName": "Avery",
      "difficulty": "easy",
      "promptText": "A weekend volunteer event will take place on campus. Write an email to your classmate inviting them to join you, explaining why you think they would enjoy it, and describing one benefit of volunteering together.",
      "requiredPoints": [
        "invite your classmate to the volunteer event",
        "explain why they would enjoy it",
        "describe one benefit of volunteering together"
      ],
      "ui": { "introZh": "这道题需要你邀请同学一起参加周末志愿活动，并解释为什么对方会喜欢。", "categoryZh": "邀请 / 提议" },
      "modeSupport": { "fullyGuided": true, "partlyGuided": true, "testMode": true },
      "blocks": [
        { "key": "to", "labelZh": "收件人", "type": "fixed", "defaultText": "Avery", "defaultFrame": "", "hintZh": "系统已帮你填好收件人。", "required": true, "checkFocus": [], "feedbackTips": { "good": "", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "subject", "labelZh": "主题", "type": "editable", "defaultText": "", "defaultFrame": "Would You Like to Join the Weekend Volunteer Event?", "scaffoldParts": [{ "type": "variable", "text": "Would You Like to Join the Weekend Volunteer Event?" }], "hintZh": "主题可以稍微自然一点，但仍要清楚。", "required": true, "checkFocus": ["subject_is_clear"], "feedbackTips": { "good": "这个主题自然又清楚。", "tooVague": "主题还可以更具体。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "greeting", "labelZh": "称呼", "type": "editable", "defaultText": "", "defaultFrame": "Dear Avery,", "scaffoldParts": [{ "type": "template", "text": "Dear " }, { "type": "variable", "text": "Avery," }], "hintZh": "写给同学，用 Dear 很稳妥。", "required": true, "checkFocus": ["tone_is_appropriate"], "feedbackTips": { "good": "称呼没有问题。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "purpose", "labelZh": "写信目的", "type": "editable", "defaultText": "", "defaultFrame": "I'm writing to invite you to the weekend volunteer event on campus, because I think it would be a valuable experience for both of us.", "scaffoldParts": [{ "type": "template", "text": "I'm writing to invite you to " }, { "type": "variable", "text": "the weekend volunteer event on campus, because I think it would be a valuable experience for both of us." }], "hintZh": "这里直接发出邀请。", "required": true, "checkFocus": ["purpose_is_clear", "states_invitation"], "feedbackTips": { "good": "邀请表达得很明确。", "tooVague": "这里需要直接写出你想邀请对方做什么。", "toneTooDirect": "", "missingTaskFit": "这一句还没有明确发出邀请。" } },
        { "key": "detail1", "labelZh": "细节1", "type": "editable", "defaultText": "", "defaultFrame": "I thought you might especially enjoy it since you have said you want to get more involved in community activities.", "hintZh": "这里解释为什么你觉得对方会喜欢。", "required": true, "checkFocus": ["explains_interest", "covers_required_point"], "feedbackTips": { "good": "这句很好地解释了为什么对方会感兴趣。", "tooVague": "原因还可以更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要解释为什么对方会喜欢这个活动。" } },
        { "key": "detail2", "labelZh": "细节2", "type": "editable", "defaultText": "", "defaultFrame": "It would also give us a great chance to spend time together while doing something meaningful.", "scaffoldParts": [{ "type": "template", "text": "It would also give us a great chance to " }, { "type": "variable", "text": "spend time together while doing something meaningful." }], "hintZh": "这里写一起去的好处。", "required": true, "checkFocus": ["states_shared_benefit", "covers_required_point"], "feedbackTips": { "good": "这句已经写出了「一起去」的好处。", "tooVague": "这里还可以把好处写得更具体一些。", "toneTooDirect": "", "missingTaskFit": "这里需要写「一起参加」有什么好处。" } },
        { "key": "action", "labelZh": "请求句", "type": "editable", "defaultText": "", "defaultFrame": "Please let me know if you would like to join me.", "hintZh": "邀请后自然地请对方回复。", "required": true, "checkFocus": ["clear_next_step", "polite_request"], "feedbackTips": { "good": "这一句很自然。", "tooVague": "最好明确请对方回复。", "toneTooDirect": "", "missingTaskFit": "" } },
        { "key": "closing", "labelZh": "结尾", "type": "editable", "defaultText": "", "defaultFrame": "I hope to hear from you soon.", "scaffoldParts": [{ "type": "template", "text": "I hope to hear from you soon." }], "hintZh": "简短、自然即可。", "required": true, "checkFocus": ["closing_is_polite"], "feedbackTips": { "good": "结尾自然。", "tooVague": "", "toneTooDirect": "", "missingTaskFit": "" } }
      ],
      "samples": {
        "band4Like": "Dear Avery,\n\nI'm writing to invite you to the weekend volunteer event on campus, because I think it would be a valuable experience for both of us. I thought you might enjoy it since you want to get more involved in community activities. It would also give us a chance to spend time together while doing something meaningful. Please let me know if you would like to join me.\n\nI hope to hear from you soon.",
        "band5Like": "Dear Avery,\n\nI'm writing to invite you to the weekend volunteer event on campus, because I think it would be a valuable experience for both of us. I thought you might especially enjoy it since you have said you want to get more involved in community activities. It would also give us a great chance to spend time together while doing something meaningful. Please let me know if you would like to join me.\n\nI hope to hear from you soon."
      },
      "commonMistakesZh": [
        "只发出邀请，没有解释为什么对方会喜欢",
        "没有写一起参加的好处",
        "语言太像口语聊天，不像邮件"
      ]
    }
  ]