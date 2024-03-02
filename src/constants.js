import chatgptLogo from "./assets/chatgpt.svg";
import bingLogo from "./assets/bing.svg";
import geminiLogo from "./assets/gemini.svg";
import claudeLogo from "./assets/claude.svg";
import poeLogo from "./assets/poe.svg";
import phindLogo from "./assets/phind.svg";
import perplexityLogo from "./assets/perplexity.svg";
import slidespilotLogo from "./assets/slidespilot.svg";
import slidesgoLogo from "./assets/slidesgo.svg";
import chatpdfLogo from "./assets/chatpdf.svg";
import chatexcelLogo from "./assets/chatexcel.svg";
import vizlyLogo from "./assets/vizly.svg";
import chatcsvLogo from "./assets/chatcsv.svg";
import microsoftDesignerLogo from "./assets/microsoft-designer.svg";
import copilotLogo from "./assets/copilot.svg";
import stableDiffusionLogo from "./assets/stability-ai.svg";
import sdxlLightningLogo from "./assets/huggingface.svg";
import textToSpeechLogo from "./assets/natural-reader.svg";
import textToVideoLogo from "./assets/invideo.svg";
import clipchampLogo from "./assets/clipchamp.svg";
import canvaLogo from "./assets/canva.svg";
import tinywowLogo from "./assets/tinywow.svg";
import freetinytoolsLogo from "./assets/freetinytools.svg";
import commontoolsLogo from "./assets/commontools.svg";
import tencentToolsLogo from "./assets/tencent-tools.svg";
import allinoneLogo from "./assets/allinone.svg";
import simplifiedLogo from "./assets/simplified.svg";
import theresAnAiForThatLogo from "./assets/theres-an-ai-for-that.svg";
import futurepediaLogo from "./assets/futurepedia.svg";
import aiLibraryLogo from "./assets/ai-library.svg";
import toolifyLogo from "./assets/toolify.svg";

export const sources = [
  {
    title: "AI ChatBOT",
    tools: [
      {
        name: "ChatGPT",
        link: "https://chat.openai.com/",
        image: chatgptLogo,
        description:
          "Powerful conversational AI, developed by OpenAI, revolutionizing human-computer interaction..",
      },
      {
        name: "Bing AI/Copilot",
        link: "https://copilot.microsoft.com/",
        image: copilotLogo,
        description:
          "Microsoft's AI-powered code completion tool, enhancing productivity with 3 versatile modes.",
      },
      {
        name: "Gemini",
        link: "https://gemini.google.com/app",
        image: geminiLogo,
        description:
          "Google's most capable and general model, built to be multimodal.",
      },
      {
        name: "Claude",
        link: "https://claude.ai/chats",
        image: claudeLogo,
        description:
          "Anthropic's conversational AI platform for natural language processing.",
      },
      {
        name: "Poe",
        link: "https://poe.com/",
        image: poeLogo,
        description:
          "Poe is a comprehensive LLM toolkit boasting exceptional features.",
      },
      {
        name: "Phind",
        link: "https://phind.com/",
        image: phindLogo,
        description:
          "Phind is an AI-powered answer engine for developers, delivering solutions in seconds.",
      },
      {
        name: "Perplexity AI",
        link: "https://perplexity.ai/",
        image: perplexityLogo,
        description:
          "A tool for research and citations, enhancing source credibility and integration with other tools.",
      },
    ],
  },
  {
    title: "Slides Generator",
    tools: [
      {
        name: "Slidespilot",
        link: "https://www.slidespilot.com/home",
        image: slidespilotLogo,
        description:
          "Slidespilot is an AI-powered tool designed to complement your presentation workflow.",
      },
      {
        name: "Slidesgo",
        link: "https://slidesgo.com/",
        image: slidesgoLogo,
        description:
          "Slidesgo offers professional presentation templates and designs.",
      },
    ],
  },
  {
    title: "PDF Summarizer",
    tools: [
      {
        name: "ChatPDF",
        link: "https://www.chatpdf.com/",
        image: chatpdfLogo,
        description:
          "AI-powered tool for PDF interaction task and get instant answers.",
      },
      {
        name: "Claude",
        link: "https://claude.ai/chats",
        image: claudeLogo,
        description:
          "Claude provides the capability to read and answer questions from PDF files.",
      },
      {
        name: "Poe (Poe)",
        link: "https://poe.com/",
        image: poeLogo,
        description:
          "Enables input of PDFs into various LLM models for diverse insights",
      },
    ],
  },
  {
    title: "Excel Mannipulation & Visualization",
    tools: [
      {
        name: "ChatExcel",
        link: "https://chatexcel.com/convert-en",
        image: chatexcelLogo,
        description:
          "ChatExcel offers tools for converting and managing Excel files.",
      },
      {
        name: "Vizly",
        link: "https://vizly.fyi/app",
        image: vizlyLogo,
        description:
          "Vizly provides visualization tools for data analysis and presentation.",
      },
    ],
  },
  {
    title: "CSV Mannipulation",
    tools: [
      {
        name: "ChatCSV",
        link: "https://www.chatcsv.co/dashboard",
        image: chatcsvLogo,
        description:
          "ChatCSV offers tools for manipulating CSV files efficiently.",
      },
    ],
  },
  {
    title: "Image Creation",
    tools: [
      {
        name: "Microsoft Designer",
        link: "https://designer.microsoft.com/",
        image: microsoftDesignerLogo,
        description:
          "Microsoft Designer provides tools for creating graphics and designs.",
      },
      {
        name: "Bing AI/Copilot (Microsoft)",
        link: "https://copilot.microsoft.com/",
        image: copilotLogo,
        description:
          "Craft your desired images through interactive conversations with Copilot AI.",
      },
      {
        name: "Stable Diffusion",
        link: "https://clipdrop.co/stable-diffusion-turbo",
        image: stableDiffusionLogo,
        description:
          "Produces unique photorealistic images from text and image prompts.",
      },
      {
        name: "SDXL-Lightning",
        link: "https://huggingface.co/spaces/radames/Real-Time-Text-to-Image-SDXL-Lightning",
        image: sdxlLightningLogo,
        description:
          "SDXL-Lightning provides real-time text-to-image generation capabilities.",
      },
      {
        name: "Gemini",
        link: "https://gemini.google.com/app",
        image: geminiLogo,
        description:
          "Create captivating images in seconds with Gemini Apps, for work or leisure.",
      },
    ],
  },
  {
    title: "Text to speech",
    tools: [
      {
        name: "Natural Reader",
        link: "https://www.naturalreaders.com/online/",
        image: textToSpeechLogo,
        description:
          "Natural Reader converts text into spoken words with natural voices.",
      },
      {
        name: "Clipchamp",
        link: "https://app.clipchamp.com/",
        image: clipchampLogo,
        description:
          "Clipchamp's AI text to speech generator supports over 80 different languages.",
      },
    ],
  },
  {
    title: "Text to video",
    tools: [
      {
        name: "Invideo AI",
        link: "https://ai.invideo.io/",
        image: textToVideoLogo,
        description:
          "Invideo AI creates videos from text input using AI technology.",
      },
    ],
  },
  {
    title: "Design",
    tools: [
      {
        name: "Canva",
        link: "https://www.canva.com/",
        image: canvaLogo,
        description:
          "Canva offers a wide range of design tools and templates for creatives.",
      },
      {
        name: "Microsoft Designer",
        link: "https://designer.microsoft.com/",
        image: microsoftDesignerLogo,
        description:
          "Microsoft Designer provides tools for creating graphics and designs.",
      },
    ],
  },
  {
    title: "Small tools",
    tools: [
      {
        name: "TinyWow",
        link: "https://tinywow.com/",
        image: tinywowLogo,
        description:
          "TinyWow provides a collection of small and useful online tools for various tasks.",
      },
      {
        name: "Free Tiny Tools",
        link: "https://freetinytools.com/",
        image: freetinytoolsLogo,
        description:
          "Free Tiny Tools offers various small utilities for free to simplify tasks.",
      },
      {
        name: "Commontools",
        link: "https://www.commontools.org/",
        image: commontoolsLogo,
        description:
          "Commontools provides commonly used online tools for everyday tasks.",
      },
      {
        name: "Tencet Tools",
        link: "https://tool.browser.qq.com/",
        image: tencentToolsLogo,
        description:
          "Tencent Tools offers a collection of online utilities for different needs.",
      },
      {
        name: "Allinone",
        link: "https://allinone.tools/",
        image: allinoneLogo,
        description:
          "Allinone provides a comprehensive set of online tools for various purposes.",
      },
      {
        name: "Simplified",
        link: "https://app.simplified.com/design",
        image: simplifiedLogo,
        description:
          "One-stop solution for creating, collaborating, and scaling marketing efforts.",
      },
    ],
  },
  {
    title: "AI Tools Collection Site",
    tools: [
      {
        name: "There's An Ai For That",
        link: "https://theresanaiforthat.com/",
        image: theresAnAiForThatLogo,
        description:
          "There's An AI For That is a collection of various AI tools and resources.",
      },
      {
        name: "Futurepedia",
        link: "https://www.futurepedia.io/",
        image: futurepediaLogo,
        description:
          "Futurepedia provides futuristic AI-based tools and resources for enthusiasts.",
      },
      {
        name: "Ai Library",
        link: "https://library.phygital.plus/",
        image: aiLibraryLogo,
        description:
          "Extensive collection of digital illustrations, vector art, icons, and 3D graphics tools.",
      },
      {
        name: "Toolify",
        link: "https://www.toolify.ai/",
        image: toolifyLogo,
        description:
          "Your go-to directory for comprehensive AI tools, aiding businesses and individuals.",
      },
    ],
  },
];

export const sourcesName = [
  "ChatGPT (OpenAI)",
  "Bing AI/Copilot (Microsoft)",
  "Gemini (Google)",
  "Claude Chat (Anthropic)",
  "Poe (Poe)",
  "Phind (Phind)",
  "Perplexity AI (Perplexity)",
  "Slidespilot",
  "Slidesgo",
  "ChatPDF",
  "Claude Chat (Anthropic)",
  "Poe (Poe)",
  "ChatExcel",
  "Vizly",
  "ChatCSV",
  "Microsoft Designer",
  "Bing AI/Copilot (Microsoft)",
  "Stable Diffusion",
  "SDXL-Lightning",
  "Gemini (Google)",
  "Natural Reader",
  "Invideo AI",
  "Canva",
  "TinyWow",
  "Free Tiny Tools",
  "Commontools",
  "Tencet Tools",
  "Allinone",
  "Simplified",
  "There's An Ai For That",
  "Futurepedia",
  "Ai Library",
  "Toolify",
];
