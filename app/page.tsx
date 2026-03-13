import Bucket from "@/components/ui/bucket";
import RolesSection from "@/components/roles-section";

const BEFORE_BENTO = `<!-- HERO (no nav) -->
<section class="relative min-h-screen pt-20 pb-16 overflow-hidden">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-fade"></div>

  <div class="section-max relative z-10 text-center">
    <div class="inline-flex items-center gap-2 bg-[#1A1A1A]/5 border border-[#1A1A1A]/10 rounded-full px-4 py-1.5 mb-6">
      <span class="text-[#1A1A1A]/50 text-xs font-medium">Powered by OpenClaw</span>
    </div>

    <!-- Hero Image -->
    <div class="mb-8" style="text-align:center;">
      <img src="img/hero.png" alt="Plus One hero illustration" style="max-width:640px; width:80%; margin:0 auto; display:block;">
    </div>

    <h1 class="text-5xl md:text-7xl font-medium text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
      Promote yourself<br>with a <span class="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">+1</span>
    </h1>

    <p class="text-[#1A1A1A]/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
      Get your own OpenClaw with 1-click, launched on a secure server run by Every and powered with out-of-the-box skills, preferences, and connections to our apps.
    </p>

    <a href="#pricing" class="cta-btn gap-2 bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 transition">
      Name your Plus One →
    </a>

  </div><!-- close section-max -->

  <!-- Slack Conversations Banner — full width -->
  <div class="mt-16">
    <p class="text-[#1A1A1A]/50 text-sm font-semibold uppercase tracking-wider text-center mb-6">Hand over to your +1:</p>

      <div class="overflow-hidden mb-4 marquee-mask">
        <div class="marquee-track">
          <!-- Engineering -->
          <div class="slack-card">
            <div class="cat-label"><span>Engineering</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#8B6914;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/person1.jpg" class="pfp" alt=""><div><span class="slack-name">Austin</span><p class="slack-text">@Judd, users want to use Monologue for meeting notes, can you spin up an MVP and push to staging?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent1.jpg" class="pfp" alt=""><div><span class="slack-name">Judd</span><p class="slack-text">I see those requests too. Great idea. I'll spin up a plan and share before I get started.</p></div></div>
          </div>
          <!-- Customer Support -->
          <div class="slack-card">
            <div class="cat-label"><span>Customer Support</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/intercom.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHV4MW2TEJ32MP5J69J5PP.avif" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQCHAC77QT0J9RKDCYPNBG.webp" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/discord.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person2.jpg" class="pfp" alt=""><div><span class="slack-name">Elle</span><p class="slack-text">@Jalaiyah we're getting support emails that users are missing today's Camp Zoom link. What is it?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent2.jpg" class="pfp" alt=""><div><span class="slack-name">Jalaiyah</span><p class="slack-text">https://us02web.zoom.us/j/85340652464</p></div></div>
            <div class="slack-msg"><img src="img/person2.jpg" class="pfp" alt=""><div><span class="slack-name">Elle</span><p class="slack-text">Got it, adding that as a temporary Intercom article. I'll handle these responses going forward.</p></div></div>
          </div>
          <!-- Analysis -->
          <div class="slack-card">
            <div class="cat-label"><span>Analysis</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/stripe.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#5246CF;flex-shrink:0;"></div><div style="width:16px;height:16px;border-radius:4px;background:#6366F1;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/person3.jpg" class="pfp" alt=""><div><span class="slack-name">Dan</span><p class="slack-text">@Zosia, if trials continue converting at this rate and we add trailing 7-day avg subscribers through March, what will growth look like?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent3.jpg" class="pfp" alt=""><div><span class="slack-name">Zosia</span><p class="slack-text">Pulled data from Stripe and ChartMogul. Huge month, likely 22%+ MoM growth. Want me to pull consulting, sponsorship, and course revenue from Mercury too?</p></div></div>
          </div>
          <!-- Design -->
          <div class="slack-card">
            <div class="cat-label"><span>Design</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/figma.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#2EAD33;flex-shrink:0;"></div><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJGKMBFJ92BWB3TXGTK9Z3.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person6.jpg" class="pfp" alt=""><div><span class="slack-name">Lucas</span><p class="slack-text">@Manousos we're adding a login button to Proof but have limited space in mobile. Check it out and drop suggestions into Figma.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent4.jpg" class="pfp" alt=""><div><span class="slack-name">Manousos</span><p class="slack-text">Will design a few options, I've got the page loaded and see a few ways to work this</p></div></div>
          </div>
          <!-- DUPLICATES for seamless loop -->
          <!-- Engineering -->
          <div class="slack-card">
            <div class="cat-label"><span>Engineering</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#8B6914;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/person1.jpg" class="pfp" alt=""><div><span class="slack-name">Austin</span><p class="slack-text">@Judd, users want to use Monologue for meeting notes, can you spin up an MVP and push to staging?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent1.jpg" class="pfp" alt=""><div><span class="slack-name">Judd</span><p class="slack-text">I see those requests too. Great idea. I'll spin up a plan and share before I get started.</p></div></div>
          </div>
          <!-- Customer Support -->
          <div class="slack-card">
            <div class="cat-label"><span>Customer Support</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/intercom.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHV4MW2TEJ32MP5J69J5PP.avif" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQCHAC77QT0J9RKDCYPNBG.webp" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/discord.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person2.jpg" class="pfp" alt=""><div><span class="slack-name">Elle</span><p class="slack-text">@Jalaiyah we're getting support emails that users are missing today's Camp Zoom link. What is it?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent2.jpg" class="pfp" alt=""><div><span class="slack-name">Jalaiyah</span><p class="slack-text">https://us02web.zoom.us/j/85340652464</p></div></div>
            <div class="slack-msg"><img src="img/person2.jpg" class="pfp" alt=""><div><span class="slack-name">Elle</span><p class="slack-text">Got it, adding that as a temporary Intercom article. I'll handle these responses going forward.</p></div></div>
          </div>
          <!-- Analysis -->
          <div class="slack-card">
            <div class="cat-label"><span>Analysis</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/stripe.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#5246CF;flex-shrink:0;"></div><div style="width:16px;height:16px;border-radius:4px;background:#6366F1;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/person3.jpg" class="pfp" alt=""><div><span class="slack-name">Dan</span><p class="slack-text">@Zosia, if trials continue converting at this rate and we add trailing 7-day avg subscribers through March, what will growth look like?</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent3.jpg" class="pfp" alt=""><div><span class="slack-name">Zosia</span><p class="slack-text">Pulled data from Stripe and ChartMogul. Huge month, likely 22%+ MoM growth. Want me to pull consulting, sponsorship, and course revenue from Mercury too?</p></div></div>
          </div>
          <!-- Design -->
          <div class="slack-card">
            <div class="cat-label"><span>Design</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/figma.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#2EAD33;flex-shrink:0;"></div><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJGKMBFJ92BWB3TXGTK9Z3.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person6.jpg" class="pfp" alt=""><div><span class="slack-name">Lucas</span><p class="slack-text">@Manousos we're adding a login button to Proof but have limited space in mobile. Check it out and drop suggestions into Figma.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent4.jpg" class="pfp" alt=""><div><span class="slack-name">Manousos</span><p class="slack-text">Will design a few options, I've got the page loaded and see a few ways to work this</p></div></div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden marquee-mask">
        <div class="marquee-track-reverse">
          <!-- Marketing Copy -->
          <div class="slack-card">
            <div class="cat-label"><span>Marketing Copy</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJR7JDVC687V1BX69S1WT5.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/github.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/notion.so/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFK820X1M5VNFZFNA5DR4GS.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person4.jpg" class="pfp" alt=""><div><span class="slack-name">Anukshi</span><p class="slack-text">@Iris, we're launching a new Sparkle feature tomorrow. Check the latest PR in Github and run our feature launch workflow.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent5.jpg" class="pfp" alt=""><div><span class="slack-name">Iris</span><p class="slack-text">On it, spun up the launch tracker in Notion and dropped in Google Docs with the copy. Used the Spiral style for Sparkle.</p></div></div>
          </div>
          <!-- Operations -->
          <div class="slack-card">
            <div class="cat-label"><span>Operations</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/discord.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJGKMBFJ92BWB3TXGTK9Z3.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person5.jpg" class="pfp" alt=""><div><span class="slack-name">Brandon</span><p class="slack-text">@Zosia we're migrating from Discord to Slack. I just gave you full access. Write up a plan to manage the transition</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent3.jpg" class="pfp" alt=""><div><span class="slack-name">Zosia</span><p class="slack-text">On it</p></div></div>
          </div>
          <!-- Sales -->
          <div class="slack-card">
            <div class="cat-label"><span>Sales</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/salesforce.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#5951FF;flex-shrink:0;"></div><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQDXMYZPG9W7J70M4FYT1C.webp" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/agent6.jpg" class="pfp" alt=""><div><span class="slack-name">Alfredo</span><p class="slack-text">@sales new inbound looks really good. 100+ person co, high intent, recently raised a round. Want me to follow up?</p></div></div>
            <div class="slack-msg"><img src="img/person7.jpg" class="pfp" alt=""><div><span class="slack-name">Julik</span><p class="slack-text">Yeah go for it.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent6.jpg" class="pfp" alt=""><div><span class="slack-name">Alfredo</span><p class="slack-text">On it. I want to bang the gong if we close this one</p></div></div>
          </div>
          <!-- Product Management -->
          <div class="slack-card">
            <div class="cat-label"><span>Product</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/notion.so/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#10A37F;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/agent7.jpg" class="pfp" alt=""><div><span class="slack-name">Milo</span><p class="slack-text">@here new feedback for Para just came in. Users want more lax permissions on sharing answers in trusted channels. Added it to Notion tracker and submitted a PR.</p></div></div>
            <div class="slack-msg"><img src="img/person8.jpg" class="pfp" alt=""><div><span class="slack-name">Paridhi</span><p class="slack-text">Milo DM me with details, I have thoughts on this solution.</p></div></div>
          </div>
          <!-- DUPLICATES for seamless loop -->
          <!-- Marketing Copy -->
          <div class="slack-card">
            <div class="cat-label"><span>Marketing Copy</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJR7JDVC687V1BX69S1WT5.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/github.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/notion.so/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFK820X1M5VNFZFNA5DR4GS.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person4.jpg" class="pfp" alt=""><div><span class="slack-name">Anukshi</span><p class="slack-text">@Iris, we're launching a new Sparkle feature tomorrow. Check the latest PR in Github and run our feature launch workflow.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent5.jpg" class="pfp" alt=""><div><span class="slack-name">Iris</span><p class="slack-text">On it, spun up the launch tracker in Notion and dropped in Google Docs with the copy. Used the Spiral style for Sparkle.</p></div></div>
          </div>
          <!-- Operations -->
          <div class="slack-card">
            <div class="cat-label"><span>Operations</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/discord.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJGKMBFJ92BWB3TXGTK9Z3.png" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/person5.jpg" class="pfp" alt=""><div><span class="slack-name">Brandon</span><p class="slack-text">@Zosia we're migrating from Discord to Slack. I just gave you full access. Write up a plan to manage the transition</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent3.jpg" class="pfp" alt=""><div><span class="slack-name">Zosia</span><p class="slack-text">On it</p></div></div>
          </div>
          <!-- Sales -->
          <div class="slack-card">
            <div class="cat-label"><span>Sales</span><div class="cat-icons"><img src="https://cdn.brandfetch.io/salesforce.com/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#5951FF;flex-shrink:0;"></div><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQDXMYZPG9W7J70M4FYT1C.webp" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"></div></div>
            <div class="slack-msg"><img src="img/agent6.jpg" class="pfp" alt=""><div><span class="slack-name">Alfredo</span><p class="slack-text">@sales new inbound looks really good. 100+ person co, high intent, recently raised a round. Want me to follow up?</p></div></div>
            <div class="slack-msg"><img src="img/person7.jpg" class="pfp" alt=""><div><span class="slack-name">Julik</span><p class="slack-text">Yeah go for it.</p></div></div>
            <div class="slack-msg slack-agent"><img src="img/agent6.jpg" class="pfp" alt=""><div><span class="slack-name">Alfredo</span><p class="slack-text">On it. I want to bang the gong if we close this one</p></div></div>
          </div>
          <!-- Product Management -->
          <div class="slack-card">
            <div class="cat-label"><span>Product</span><div class="cat-icons"><img src="https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><img src="https://cdn.brandfetch.io/notion.so/icon/default" style="width:16px;height:16px;border-radius:4px;object-fit:cover;"><div style="width:16px;height:16px;border-radius:4px;background:#10A37F;flex-shrink:0;"></div></div></div>
            <div class="slack-msg"><img src="img/agent7.jpg" class="pfp" alt=""><div><span class="slack-name">Milo</span><p class="slack-text">@here new feedback for Para just came in. Users want more lax permissions on sharing answers in trusted channels. Added it to Notion tracker and submitted a PR.</p></div></div>
            <div class="slack-msg"><img src="img/person8.jpg" class="pfp" alt=""><div><span class="slack-name">Paridhi</span><p class="slack-text">Milo DM me with details, I have thoughts on this solution.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- THE OPPORTUNITY -->
<section class="py-24">
  <div class="section-max text-center">
    <h2 class="text-4xl md:text-6xl font-medium tracking-tight mb-6">Do 10x the work,<br>10x as fast, 10x as fun</h2>
    <p class="text-secondary text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
      Meet your new work friend. They have a name, personality, memory, and infinite toolbelt. They take action for you autonomously and can handle any task, no matter how big or small, across your entire organization. Go ahead… promote yourself.
    </p>
    <p class="text-2xl md:text-4xl font-medium text-[#1A1A1A]/80 mb-8">Plus One's are the future of work</p>
    <a href="#pricing" class="cta-btn bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 transition">Get a +1</a>
  </div>

  <!-- Number marquee — slow, +1 through +4 in containers -->
  <div class="mt-16 overflow-hidden py-8">
    <div class="marquee-slow"><div class="num-container"><span class="num-text">+1</span></div><div class="num-container"><span class="num-text">+2</span></div><div class="num-container"><span class="num-text">+3</span></div><div class="num-container"><span class="num-text">+4</span></div><div class="num-container"><span class="num-text">+5</span></div><div class="num-container"><span class="num-text">+6</span></div><div class="num-container"><span class="num-text">+7</span></div><div class="num-container"><span class="num-text">+8</span></div><div class="num-container"><span class="num-text">+9</span></div><div class="num-container"><span class="num-text">+10</span></div><div class="num-container"><span class="num-text">+11</span></div><div class="num-container"><span class="num-text">+12</span></div><div class="num-container"><span class="num-text">+13</span></div><div class="num-container"><span class="num-text">+14</span></div><div class="num-container"><span class="num-text">+15</span></div><div class="num-container"><span class="num-text">+16</span></div><div class="num-container"><span class="num-text">+17</span></div><div class="num-container"><span class="num-text">+18</span></div><div class="num-container"><span class="num-text">+19</span></div><div class="num-container"><span class="num-text">+20</span></div><div class="num-container"><span class="num-text">+21</span></div><div class="num-container"><span class="num-text">+22</span></div><div class="num-container"><span class="num-text">+23</span></div><div class="num-container"><span class="num-text">+24</span></div><div class="num-container"><span class="num-text">+25</span></div><div class="num-container"><span class="num-text">+26</span></div><div class="num-container"><span class="num-text">+27</span></div><div class="num-container"><span class="num-text">+28</span></div><div class="num-container"><span class="num-text">+29</span></div><div class="num-container"><span class="num-text">+30</span></div><div class="num-container"><span class="num-text">+31</span></div><div class="num-container"><span class="num-text">+32</span></div><div class="num-container"><span class="num-text">+33</span></div><div class="num-container"><span class="num-text">+34</span></div><div class="num-container"><span class="num-text">+35</span></div><div class="num-container"><span class="num-text">+36</span></div><div class="num-container"><span class="num-text">+37</span></div><div class="num-container"><span class="num-text">+38</span></div><div class="num-container"><span class="num-text">+39</span></div><div class="num-container"><span class="num-text">+40</span></div><div class="num-container"><span class="num-text">+41</span></div><div class="num-container"><span class="num-text">+42</span></div><div class="num-container"><span class="num-text">+43</span></div><div class="num-container"><span class="num-text">+44</span></div><div class="num-container"><span class="num-text">+45</span></div><div class="num-container"><span class="num-text">+46</span></div><div class="num-container"><span class="num-text">+47</span></div><div class="num-container"><span class="num-text">+48</span></div><div class="num-container"><span class="num-text">+49</span></div><div class="num-container"><span class="num-text">+50</span></div><div class="num-container"><span class="num-text">+51</span></div><div class="num-container"><span class="num-text">+52</span></div><div class="num-container"><span class="num-text">+53</span></div><div class="num-container"><span class="num-text">+54</span></div><div class="num-container"><span class="num-text">+55</span></div><div class="num-container"><span class="num-text">+56</span></div><div class="num-container"><span class="num-text">+57</span></div><div class="num-container"><span class="num-text">+58</span></div><div class="num-container"><span class="num-text">+59</span></div><div class="num-container"><span class="num-text">+60</span></div><div class="num-container"><span class="num-text">+61</span></div><div class="num-container"><span class="num-text">+62</span></div><div class="num-container"><span class="num-text">+63</span></div><div class="num-container"><span class="num-text">+64</span></div><div class="num-container"><span class="num-text">+65</span></div><div class="num-container"><span class="num-text">+66</span></div><div class="num-container"><span class="num-text">+67</span></div><div class="num-container"><span class="num-text">+68</span></div><div class="num-container"><span class="num-text">+69</span></div><div class="num-container"><span class="num-text">+70</span></div><div class="num-container"><span class="num-text">+71</span></div><div class="num-container"><span class="num-text">+72</span></div><div class="num-container"><span class="num-text">+73</span></div><div class="num-container"><span class="num-text">+74</span></div><div class="num-container"><span class="num-text">+75</span></div><div class="num-container"><span class="num-text">+76</span></div><div class="num-container"><span class="num-text">+77</span></div><div class="num-container"><span class="num-text">+78</span></div><div class="num-container"><span class="num-text">+79</span></div><div class="num-container"><span class="num-text">+80</span></div><div class="num-container"><span class="num-text">+81</span></div><div class="num-container"><span class="num-text">+82</span></div><div class="num-container"><span class="num-text">+83</span></div><div class="num-container"><span class="num-text">+84</span></div><div class="num-container"><span class="num-text">+85</span></div><div class="num-container"><span class="num-text">+86</span></div><div class="num-container"><span class="num-text">+87</span></div><div class="num-container"><span class="num-text">+88</span></div><div class="num-container"><span class="num-text">+89</span></div><div class="num-container"><span class="num-text">+90</span></div><div class="num-container"><span class="num-text">+91</span></div><div class="num-container"><span class="num-text">+92</span></div><div class="num-container"><span class="num-text">+93</span></div><div class="num-container"><span class="num-text">+94</span></div><div class="num-container"><span class="num-text">+95</span></div><div class="num-container"><span class="num-text">+96</span></div><div class="num-container"><span class="num-text">+97</span></div><div class="num-container"><span class="num-text">+98</span></div><div class="num-container"><span class="num-text">+99</span></div><div class="num-container"><span class="num-text">+100</span></div><div class="num-container"><span class="num-text">+1</span></div><div class="num-container"><span class="num-text">+2</span></div><div class="num-container"><span class="num-text">+3</span></div><div class="num-container"><span class="num-text">+4</span></div><div class="num-container"><span class="num-text">+5</span></div><div class="num-container"><span class="num-text">+6</span></div><div class="num-container"><span class="num-text">+7</span></div><div class="num-container"><span class="num-text">+8</span></div><div class="num-container"><span class="num-text">+9</span></div><div class="num-container"><span class="num-text">+10</span></div><div class="num-container"><span class="num-text">+11</span></div><div class="num-container"><span class="num-text">+12</span></div><div class="num-container"><span class="num-text">+13</span></div><div class="num-container"><span class="num-text">+14</span></div><div class="num-container"><span class="num-text">+15</span></div><div class="num-container"><span class="num-text">+16</span></div><div class="num-container"><span class="num-text">+17</span></div><div class="num-container"><span class="num-text">+18</span></div><div class="num-container"><span class="num-text">+19</span></div><div class="num-container"><span class="num-text">+20</span></div><div class="num-container"><span class="num-text">+21</span></div><div class="num-container"><span class="num-text">+22</span></div><div class="num-container"><span class="num-text">+23</span></div><div class="num-container"><span class="num-text">+24</span></div><div class="num-container"><span class="num-text">+25</span></div><div class="num-container"><span class="num-text">+26</span></div><div class="num-container"><span class="num-text">+27</span></div><div class="num-container"><span class="num-text">+28</span></div><div class="num-container"><span class="num-text">+29</span></div><div class="num-container"><span class="num-text">+30</span></div><div class="num-container"><span class="num-text">+31</span></div><div class="num-container"><span class="num-text">+32</span></div><div class="num-container"><span class="num-text">+33</span></div><div class="num-container"><span class="num-text">+34</span></div><div class="num-container"><span class="num-text">+35</span></div><div class="num-container"><span class="num-text">+36</span></div><div class="num-container"><span class="num-text">+37</span></div><div class="num-container"><span class="num-text">+38</span></div><div class="num-container"><span class="num-text">+39</span></div><div class="num-container"><span class="num-text">+40</span></div><div class="num-container"><span class="num-text">+41</span></div><div class="num-container"><span class="num-text">+42</span></div><div class="num-container"><span class="num-text">+43</span></div><div class="num-container"><span class="num-text">+44</span></div><div class="num-container"><span class="num-text">+45</span></div><div class="num-container"><span class="num-text">+46</span></div><div class="num-container"><span class="num-text">+47</span></div><div class="num-container"><span class="num-text">+48</span></div><div class="num-container"><span class="num-text">+49</span></div><div class="num-container"><span class="num-text">+50</span></div><div class="num-container"><span class="num-text">+51</span></div><div class="num-container"><span class="num-text">+52</span></div><div class="num-container"><span class="num-text">+53</span></div><div class="num-container"><span class="num-text">+54</span></div><div class="num-container"><span class="num-text">+55</span></div><div class="num-container"><span class="num-text">+56</span></div><div class="num-container"><span class="num-text">+57</span></div><div class="num-container"><span class="num-text">+58</span></div><div class="num-container"><span class="num-text">+59</span></div><div class="num-container"><span class="num-text">+60</span></div><div class="num-container"><span class="num-text">+61</span></div><div class="num-container"><span class="num-text">+62</span></div><div class="num-container"><span class="num-text">+63</span></div><div class="num-container"><span class="num-text">+64</span></div><div class="num-container"><span class="num-text">+65</span></div><div class="num-container"><span class="num-text">+66</span></div><div class="num-container"><span class="num-text">+67</span></div><div class="num-container"><span class="num-text">+68</span></div><div class="num-container"><span class="num-text">+69</span></div><div class="num-container"><span class="num-text">+70</span></div><div class="num-container"><span class="num-text">+71</span></div><div class="num-container"><span class="num-text">+72</span></div><div class="num-container"><span class="num-text">+73</span></div><div class="num-container"><span class="num-text">+74</span></div><div class="num-container"><span class="num-text">+75</span></div><div class="num-container"><span class="num-text">+76</span></div><div class="num-container"><span class="num-text">+77</span></div><div class="num-container"><span class="num-text">+78</span></div><div class="num-container"><span class="num-text">+79</span></div><div class="num-container"><span class="num-text">+80</span></div><div class="num-container"><span class="num-text">+81</span></div><div class="num-container"><span class="num-text">+82</span></div><div class="num-container"><span class="num-text">+83</span></div><div class="num-container"><span class="num-text">+84</span></div><div class="num-container"><span class="num-text">+85</span></div><div class="num-container"><span class="num-text">+86</span></div><div class="num-container"><span class="num-text">+87</span></div><div class="num-container"><span class="num-text">+88</span></div><div class="num-container"><span class="num-text">+89</span></div><div class="num-container"><span class="num-text">+90</span></div><div class="num-container"><span class="num-text">+91</span></div><div class="num-container"><span class="num-text">+92</span></div><div class="num-container"><span class="num-text">+93</span></div><div class="num-container"><span class="num-text">+94</span></div><div class="num-container"><span class="num-text">+95</span></div><div class="num-container"><span class="num-text">+96</span></div><div class="num-container"><span class="num-text">+97</span></div><div class="num-container"><span class="num-text">+98</span></div><div class="num-container"><span class="num-text">+99</span></div><div class="num-container"><span class="num-text">+100</span></div></div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section id="how-it-works">
<div style="border-top:1px solid rgba(26,26,26,0.063);display:flex;flex-direction:column;font-size:12px;gap:48px;line-height:16px;padding-block:100px;padding-inline:64px;width:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;">
  <div style="display:flex;flex-direction:column;gap:12px;">
    <h2 style="margin:0;color:#1A1A1A;font-family:'Signifier',Georgia,serif;font-size:45px;font-weight:400;letter-spacing:-0.03em;line-height:54px;">How to 10x your work</h2>
  </div>
  <div style="display:flex;gap:16px;" class="how-cards">
    <div style="background:#FFFFFF;border:1px solid rgba(26,26,26,0.063);border-radius:16px;display:flex;flex:1 1 0%;flex-direction:column;gap:20px;padding:32px;">
      <div style="color:rgba(26,26,26,0.071);font-family:'Signifier',Georgia,serif;font-size:56px;font-weight:400;line-height:68px;">01</div>
      <div style="color:#1A1A1A;font-family:'Signifier',Georgia,serif;font-size:22px;font-weight:400;line-height:28px;">Add it to your Slack workspace and name your Plus One</div>
      <div style="background:#FAFAF7;border-radius:10px;display:flex;flex-direction:column;gap:8px;padding:16px;">
        <div style="font-size:14px;line-height:1.55;"><span style="color:#4A8C4A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Agent:</span><span style="color:#1A1A1A;font-family:'Switzer',system-ui,sans-serif;"> "Hey there, what do you want to call me?"</span></div>
        <div style="font-size:14px;line-height:1.55;"><span style="color:#1A1A1A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Human:</span><span style="color:rgba(26,26,26,0.5);font-family:'Switzer',system-ui,sans-serif;"> "Carol. Actually, Zosia."</span></div>
      </div>
    </div>
    <div style="background:#FFFFFF;border:1px solid rgba(26,26,26,0.063);border-radius:16px;display:flex;flex:1 1 0%;flex-direction:column;gap:20px;padding:32px;">
      <div style="color:rgba(26,26,26,0.071);font-family:'Signifier',Georgia,serif;font-size:56px;font-weight:400;line-height:68px;">02</div>
      <div style="color:#1A1A1A;font-family:'Signifier',Georgia,serif;font-size:22px;font-weight:400;line-height:28px;">Share how you work</div>
      <div style="background:#FAFAF7;border-radius:10px;display:flex;flex-direction:column;gap:8px;padding:16px;">
        <div style="font-size:14px;line-height:1.55;"><span style="color:#4A8C4A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Zosia:</span><span style="color:#1A1A1A;font-family:'Switzer',system-ui,sans-serif;"> "So what do you do at Every? What do you work on day-to-day?"</span></div>
        <div style="font-size:14px;line-height:1.55;"><span style="color:#1A1A1A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Human:</span><span style="color:rgba(26,26,26,0.5);font-family:'Switzer',system-ui,sans-serif;"> "I do support and account management"</span></div>
        <div style="font-size:14px;line-height:1.55;"><span style="color:#4A8C4A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Zosia:</span><span style="color:#1A1A1A;font-family:'Switzer',system-ui,sans-serif;"> "Cool, looks like you use Intercom and Salesforce. If you share API keys I can tell you what work I can take on."</span></div>
      </div>
    </div>
    <div style="background:#FFFFFF;border:1px solid rgba(26,26,26,0.063);border-radius:16px;display:flex;flex:1 1 0%;flex-direction:column;gap:20px;padding:32px;">
      <div style="color:rgba(26,26,26,0.071);font-family:'Signifier',Georgia,serif;font-size:56px;font-weight:400;line-height:68px;">03</div>
      <div style="color:#1A1A1A;font-family:'Signifier',Georgia,serif;font-size:22px;font-weight:400;line-height:28px;">Promote yourself</div>
      <div style="background:#FAFAF7;border-radius:10px;display:flex;flex-direction:column;gap:8px;padding:16px;">
        <div style="font-size:14px;line-height:1.55;"><span style="color:#4A8C4A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Zosia:</span><span style="color:#1A1A1A;font-family:'Switzer',system-ui,sans-serif;"> "Got access to Intercom, Salesforce, and your email! I can draft responses hourly and update deal status."</span></div>
        <div style="font-size:14px;line-height:1.55;"><span style="color:#1A1A1A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Human:</span><span style="color:rgba(26,26,26,0.5);font-family:'Switzer',system-ui,sans-serif;"> "Can you grab Granola meeting notes and sync them too?"</span></div>
        <div style="font-size:14px;line-height:1.55;"><span style="color:#4A8C4A;font-weight:600;font-family:'Switzer',system-ui,sans-serif;">Zosia:</span><span style="color:#1A1A1A;font-family:'Switzer',system-ui,sans-serif;"> "I'll summarize and append them to the right account after every meeting. Sg?"</span></div>
      </div>
    </div>
  </div>
</div>
</section>

<!-- COMES PRE-BUILT -->
<section id="features">
<div style="border-top-color:#1A1A1A10;border-top-style:solid;border-top-width:1px;box-sizing:border-box;display:flex;flex-direction:column;font-size:12px;font-synthesis:none;gap:48px;line-height:16px;-moz-osx-font-smoothing:grayscale;padding-block:100px;padding-inline:64px;width:100%;-webkit-font-smoothing:antialiased;">
<div style="box-sizing:border-box;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center;">
<div style="box-sizing:border-box;color:#1A1A1A;font-family:'Signifier',Georgia,serif;font-size:45px;letter-spacing:-0.03em;line-height:54px;">
+1s are optimized for work
</div>
<div style="box-sizing:border-box;color:#1A1A1A70;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:18px;line-height:1.65;max-width:620px;">
They come pre-loaded with everything needed to get heavy work done.
</div>
</div>
<div style="box-sizing:border-box;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
<!-- Proof -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJGKMBFJ92BWB3TXGTK9Z3.png);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Proof</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Agent native markdown editor</div>
</div>
</div>
<!-- Commons -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQ5DBVWKKMS00PR1BNQEQ4.jpg);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Commons</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Host anything</div>
</div>
</div>
<!-- Cora -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHV4MW2TEJ32MP5J69J5PP.avif);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Cora</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Optimize, manage, and search your email</div>
</div>
</div>
<!-- Spiral -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFJR7JDVC687V1BX69S1WT5.png);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Spiral</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Write consistently great content</div>
</div>
</div>
<!-- Sparkle -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQA1B4RTPEVTANE6XPK7F4.png);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Sparkle</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Connect, search, and query your files</div>
</div>
</div>
<!-- Google Apps -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="align-items:start;box-sizing:border-box;display:flex;flex-shrink:0;gap:1px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQCHAC77QT0J9RKDCYPNBG.webp);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFK820X1M5VNFZFNA5DR4GS.png);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQDXMYZPG9W7J70M4FYT1C.webp);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Google Apps</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Gmail, Calendar, Drive</div>
</div>
</div>
<!-- Slack -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFHEABEWZ2B6M8DFCAGH12Y.jpg);background-position:center;background-size:cover;border-radius:9999px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Slack</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Channels, threads, DMs, all scopes</div>
</div>
</div>
<!-- Secret Manager -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQJ3FYQ6VN5XAEZWB3JT9T.png);background-position:center;background-size:cover;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Secret Manager</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Connect any API and MCP</div>
</div>
</div>
<!-- Messaging -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="align-items:start;box-sizing:border-box;display:flex;flex-shrink:0;gap:1px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQMRR8XFMHXA2PG0CVN718.png);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQMZJMQX5Q6VKX727XXC9D.png);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQN7J2NAASSZCSP3DJ4RVY.svg);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQND44JQW304ZAWRSDVMWB.jpg);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Messaging</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Telegram, WhatsApp, Signal, Discord</div>
</div>
</div>
<!-- Model Management -->
<div class="feature-pill" style="background-color:#FFFFFF;border-color:#1A1A1A10;border-radius:10px;border-style:solid;border-width:1px;box-sizing:border-box;padding-block:10px;padding-inline:18px;">
<div style="box-sizing:border-box;">
<div style="align-items:center;box-sizing:border-box;display:flex;gap:5px;height:fit-content;padding:0;width:fit-content;">
<div style="align-items:start;box-sizing:border-box;display:flex;flex-shrink:0;gap:1px;height:fit-content;padding:0;width:fit-content;">
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQQMS16D8TW5ZSK7D0RYZ2.jpg);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQQWJWWNR2J01M8ZA2RTS8.png);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQR3RBHWECSN5XTPC7RXG3.webp);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
<div style="background-image:url(https://workers.paper.design/file-assets/01KJWTVVB5NR6MA9X3Z6H24G5K/01KKFQRC43XKJ6ZG68DDA12Y1J.png);background-origin:border-box;background-position:center;background-size:cover;border-color:#0000001A;border-radius:9999px;border-style:solid;border-width:1px;box-sizing:border-box;flex-shrink:0;height:20px;width:20px;"></div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;font-weight:600;line-height:18px;">Model Management</div>
</div>
<div style="box-sizing:border-box;color:#1A1A1A60;display:inline-block;font-family:'Switzer','DM Sans',system-ui,sans-serif;font-size:14px;line-height:18px;margin-top:6px;"> Choose your AI models</div>
</div>
</div>
</div>
</div>
</section>

<!-- SOCIAL PROOF -->
<section class="py-24" style="background:#F3F2EE;">
  <div class="section-max">
    <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center mb-16">Every human deserves a Plus One</h2>

    <!-- Passport Cards with agent images -->
    <div class="overflow-hidden mb-16 marquee-mask">
      <div class="marquee-track" style="animation-duration:35s">
        <div class="passport-card" style="animation: float 4s ease-in-out infinite;">
          <img src="img/agent3.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Zosia</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Brandon</strong>, COO</p>
          <p class="text-xs text-secondary mt-1">Works with Austin, Montaige, Dan, R2C2</p>
        </div>
        <div class="passport-card" style="animation: float 4.5s ease-in-out infinite;">
          <img src="img/agent1.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Judd</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Austin</strong>, CTO</p>
          <p class="text-xs text-secondary mt-1">Works with Milo, Paridhi, Lucas</p>
        </div>
        <div class="passport-card" style="animation: float 3.5s ease-in-out infinite;">
          <img src="img/agent5.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Iris</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Anukshi</strong>, Marketing</p>
          <p class="text-xs text-secondary mt-1">Works with Zosia, Alfredo, Elle</p>
        </div>
        <div class="passport-card" style="animation: float 5s ease-in-out infinite;">
          <img src="img/agent2.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Jalaiyah</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Elle</strong>, Support Lead</p>
          <p class="text-xs text-secondary mt-1">Works with Zosia, Iris, Milo</p>
        </div>
        <div class="passport-card" style="animation: float 4.2s ease-in-out infinite;">
          <img src="img/agent4.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Manousos</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Lucas</strong>, Design</p>
          <p class="text-xs text-secondary mt-1">Works with Judd, Paridhi, Iris</p>
        </div>
        <div class="passport-card" style="animation: float 4.8s ease-in-out infinite;">
          <img src="img/agent6.jpg" class="pfp-lg mb-3" alt="">
          <h4 class="font-medium text-lg">Alfredo</h4>
          <p class="text-sm text-secondary mt-1">Reports to <strong>Dan</strong>, Revenue</p>
          <p class="text-xs text-secondary mt-1">Works with Zosia, Julik, Iris</p>
        </div>
        <!-- Duplicates -->
        <div class="passport-card"><img src="img/agent3.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Zosia</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Brandon</strong>, COO</p></div>
        <div class="passport-card"><img src="img/agent1.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Judd</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Austin</strong>, CTO</p></div>
        <div class="passport-card"><img src="img/agent5.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Iris</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Anukshi</strong>, Marketing</p></div>
        <div class="passport-card"><img src="img/agent2.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Jalaiyah</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Elle</strong>, Support Lead</p></div>
        <div class="passport-card"><img src="img/agent4.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Manousos</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Lucas</strong>, Design</p></div>
        <div class="passport-card"><img src="img/agent6.jpg" class="pfp-lg mb-3" alt=""><h4 class="font-medium text-lg">Alfredo</h4><p class="text-sm text-secondary mt-1">Reports to <strong>Dan</strong>, Revenue</p></div>
      </div>
    </div>

    <!-- Testimonials with real photos -->
    <div class="grid md:grid-cols-3 gap-6">
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"Zosia is my go-to. She's my assistant, marketing partner, code writer, and she never drops the ball."</p>
        <div class="flex items-center gap-3"><img src="img/person5.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Brandon, COO</span></div>
      </div>
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"Judd shipped an MVP in 2 hours that would have taken us a week. It's like having a senior engineer on call 24/7."</p>
        <div class="flex items-center gap-3"><img src="img/person1.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Austin, CTO</span></div>
      </div>
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"Jalaiyah handles support tickets so fast our users think we hired a whole team. Best investment we've made."</p>
        <div class="flex items-center gap-3"><img src="img/person2.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Elle, Support</span></div>
      </div>
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"Iris writes better launch copy than most humans. She knows our voice, our tone, and our audience."</p>
        <div class="flex items-center gap-3"><img src="img/person4.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Anukshi, Marketing</span></div>
      </div>
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"I promoted myself from account manager to strategist. Zosia handles the day-to-day so I can focus on what matters."</p>
        <div class="flex items-center gap-3"><img src="img/person3.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Dan, Revenue</span></div>
      </div>
      <div class="testimonial-card bg-white rounded-2xl border border-[#EEE] p-8">
        <p class="text-base leading-relaxed mb-4">"Manousos iterates on design options faster than I can give feedback. It's changed how we ship product."</p>
        <div class="flex items-center gap-3"><img src="img/person6.jpg" class="pfp" alt=""><span class="text-sm font-semibold">Lucas, Design</span></div>
      </div>
    </div>
  </div>
</section>`;

const AFTER_ROLES = `<!-- PRICING -->
<section id="pricing" class="py-24">
  <div class="section-max text-center">
    <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-4">One subscription. Everything you need.</h2>
    <p class="text-secondary text-lg mb-10">Plus One is included in Every's bundle. Currently in invite-only beta.</p>

    <div class="max-w-lg mx-auto bg-white rounded-2xl border border-[#EEE] p-10 mb-8">
      <h3 class="text-xl font-medium mb-6">Plus One comes included with Every</h3>
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Plus One</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Every</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Sparkle</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Spiral</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Cora</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Proof</span>
        <span class="bg-[#FAFAF7] border border-[#EEE] rounded-full px-4 py-2 text-sm font-medium">Para</span>
      </div>
      <a href="#" class="cta-btn bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 transition">Join the waitlist →</a>
    </div>
  </div>
</section>

<!-- SECURITY -->
<section class="py-24" style="background:#F3F2EE;">
  <div class="section-max text-center max-w-3xl">
    <div style="margin-bottom:24px;text-align:center;"><img src="img/security-lock.jpg" style="width:64px;height:auto;mix-blend-mode:multiply;display:inline-block;" alt="Security"></div>
    <h2 class="text-4xl md:text-5xl font-medium tracking-tight mb-6">Every +1 lives in its own, secure VPS</h2>
    <p class="text-secondary text-lg leading-relaxed">
      Every +1 runs on its own dedicated server and only uses models with Zero Data Retention policies. Your conversations stay between you and your +1.
    </p>
  </div>
</section>

<!-- FAQ -->
<section id="faq" class="py-24">
  <div class="section-max max-w-3xl">
    <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-center mb-16">FAQ</h2>

    <div class="space-y-4">
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">What is a Plus One, exactly?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">A Plus One is a superpowered OpenClaw instance, managed and improved by Every. It's a personal AI agent with a name, memory, personality, and a toolbelt of integrations — all running on your own secure server.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">What can my agent do?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Read messages, pull data, write documents, analyze metrics, send emails, manage tickets, update CRMs, draft content, schedule meetings, and much more. If there's an API for it, your +1 can use it.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">How is this different from ChatGPT/Claude/Copilot?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Those answer prompts. A Plus One works alongside you with persistent memory, tool access, and the ability to take real actions across your apps. It's not a chatbot — it's a coworker.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">What tools does it connect to?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Slack, email, GitHub, Notion, Stripe, Salesforce, and more. Any tool with an API or MCP can be connected through the Secret Manager.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">Is my data safe?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Yes. Every +1 runs on its own dedicated server in an isolated environment. We only use models with Zero Data Retention policies.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">Do I need to be technical?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">No. If you can use Slack or send a text message, you can use a Plus One. It's designed to meet you where you work.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">What's included in the Every bundle?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Plus One, Cora, Sparkle, Spiral, Monologue, Proof, and Para — everything you need to supercharge your work.</div></details>
      <details class="border border-[#EEE] rounded-xl px-6 py-5 bg-white"><summary class="font-semibold text-base">Can my whole team use this?</summary><div class="faq-answer text-secondary mt-4 pb-2 leading-relaxed">Yes. Every person gets their own +1. Agents collaborate with each other and with humans across your organization.</div></details>
    </div>
  </div>
</section>

<!-- FOOTER CTA -->
<section class="py-24 relative overflow-hidden" style="background:#1A1A1A;">
  <div class="section-max relative z-10 text-center">
    <h2 class="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">Promote yourself<br>with a Plus One</h2>
    <p class="text-white/70 text-lg max-w-xl mx-auto mb-8">Get a Plus One that does all your current work so you can focus on what's important.</p>
    <a href="#pricing" class="cta-btn bg-white text-[#1A1A1A] hover:bg-white/90 transition">Promote yourself</a>
  </div>
</section>

<!-- FOOTER -->
<footer class="bg-[#1A1A1A] text-white py-16">
  <div class="section-max">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold" style="background:linear-gradient(135deg,#8c38fa,#2253CE)">+1</div>
          <span class="font-semibold">Plus One by Every</span>
        </div>
        <p class="text-white/50 text-sm">Your AI coworker, powered by OpenClaw.</p>
      </div>
      <div>
        <h4 class="text-sm font-semibold mb-4 text-white/70">Platform</h4>
        <div class="space-y-2 text-sm text-white/50"><a href="#" class="block hover:text-white transition">Proof</a><a href="#" class="block hover:text-white transition">Sparkle</a><a href="#" class="block hover:text-white transition">Spiral</a><a href="#" class="block hover:text-white transition">Cora</a><a href="#" class="block hover:text-white transition">Para</a></div>
      </div>
      <div>
        <h4 class="text-sm font-semibold mb-4 text-white/70">Resources</h4>
        <div class="space-y-2 text-sm text-white/50"><a href="#" class="block hover:text-white transition">Documentation</a><a href="#" class="block hover:text-white transition">Blog</a><a href="#" class="block hover:text-white transition">Changelog</a></div>
      </div>
      <div>
        <h4 class="text-sm font-semibold mb-4 text-white/70">Company</h4>
        <div class="space-y-2 text-sm text-white/50"><a href="#" class="block hover:text-white transition">About Every</a><a href="#" class="block hover:text-white transition">Careers</a><a href="#" class="block hover:text-white transition">Privacy</a><a href="#" class="block hover:text-white transition">Terms</a></div>
      </div>
    </div>
    <div class="border-t border-white/10 pt-8 text-center text-white/30 text-sm">© 2026 Every, Inc. All rights reserved.</div>
  </div>
</footer>`;

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: BEFORE_BENTO }} />

      <section style={{ padding: "140px 64px" }}>
        <h2 style={{ margin: 0, color: "#1A1A1A", fontFamily: "'Signifier', Georgia, serif", fontSize: "45px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: "54px", marginBottom: "12px", textAlign: "center" }}>
          Plus ones are smart
        </h2>
        <p style={{ fontFamily: "'Switzer', system-ui, sans-serif", fontSize: "18px", color: "rgba(26,26,26,0.5)", margin: "0 0 48px 0", textAlign: "center" }}>
          Tons of capabilities that make your Plus One indispensable.
        </p>
        <div style={{ marginTop: "100px" }}>
          <Bucket />
        </div>
      </section>

      <RolesSection />

      <div dangerouslySetInnerHTML={{ __html: AFTER_ROLES }} />
    </>
  );
}
