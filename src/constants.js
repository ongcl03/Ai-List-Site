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

const sources = [
  {
    title: "Large Language Model (Chat)",
    tools: [
      {
        name: "ChatGPT (OpenAI)",
        link: "https://chat.openai.com/",
        image: chatgptLogo,
        description: "Powerful conversational AI developed by OpenAI.",
      },
      {
        name: "Bing AI/Copilot (Microsoft)",
        link: "https://copilot.microsoft.com/",
        image: bingLogo,
        description:
          "Microsoft's AI-powered code completion tool for developers.",
      },
      {
        name: "Gemini (Google)",
        link: "https://gemini.google.com/app",
        image: geminiLogo,
        description:
          "Google's AI-based tool for creating stunning designs and visuals.",
      },
      {
        name: "Claude Chat (Anthropic)",
        link: "https://claude.ai/chats",
        image: claudeLogo,
        description:
          "Anthropic's conversational AI platform for natural language processing.",
      },
      {
        name: "Poe (Poe)",
        link: "https://poe.com/",
        image: poeLogo,
        description:
          "Poe is an AI writing assistant for generating creative content.",
      },
      {
        name: "Phind (Phind)",
        link: "https://phind.com/",
        image: phindLogo,
        description:
          "Phind offers AI-driven image search capabilities for finding visual content.",
      },
      {
        name: "Perplexity AI (Perplexity)",
        link: "https://perplexity.ai/",
        image: perplexityLogo,
        description:
          "Perplexity AI provides advanced AI solutions for various applications and industries.",
      },
    ],
  },
  {
    title: "PPT",
    tools: [
      {
        name: "Slidespilot",
        link: "https://www.slidespilot.com/home",
        image: slidespilotLogo,
        description:
          "Slidespilot is a platform for creating interactive presentations.",
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
    title: "PDF",
    tools: [
      {
        name: "ChatPDF",
        link: "https://www.chatpdf.com/",
        image: chatpdfLogo,
        description:
          "ChatPDF provides tools for managing and editing PDF documents.",
      },
      {
        name: "Claude Chat (Anthropic)",
        link: "https://claude.ai/chats",
        image: claudeLogo,
        description:
          "Anthropic's conversational AI platform for natural language processing.",
      },
    ],
  },
  {
    title: "Excel",
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
    title: "CSV",
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
          "Microsoft's AI-powered code completion tool for developers.",
      },
      {
        name: "Stable Diffusion",
        link: "https://clipdrop.co/stable-diffusion-turbo",
        image: stableDiffusionLogo,
        description:
          "Stable Diffusion offers advanced image manipulation tools for professionals.",
      },
      {
        name: "SDXL-Lightning",
        link: "https://huggingface.co/spaces/radames/Real-Time-Text-to-Image-SDXL-Lightning",
        image: sdxlLightningLogo,
        description:
          "SDXL-Lightning provides real-time text-to-image generation capabilities.",
      },
      {
        name: "Gemini (Google)",
        link: "https://gemini.google.com/app",
        image: geminiLogo,
        description:
          "Google's AI-based tool for creating stunning designs and visuals.",
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
          "Simplified offers tools for easy and quick design tasks for non-designers.",
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
          "Ai Library offers a vast collection of AI algorithms and resources for research.",
      },
      {
        name: "Toolify",
        link: "https://www.toolify.ai/",
        image: toolifyLogo,
        description:
          "Toolify provides AI-powered tools for various tasks and industries.",
      },
    ],
  },
];

export default sources;
