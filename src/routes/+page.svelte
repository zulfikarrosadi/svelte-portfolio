<script>
  import Section from "$lib/components/section.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import ExperienceItem from "$lib/components/experience-item.svelte";
  import Education from "$lib/components/education.svelte";
  import Certification from "$lib/components/certification.svelte";
  import { ExternalLinkIcon, MenuIcon, XIcon } from "@lucide/svelte";

  let { data } = $props();
  const { personalInfo, projects, experience, education, certifications } =
    data.portfolio;

  let isMenuOpen = $state(false);

  /**
   * Handles smooth scrolling to an anchor link, accounting for the fixed header.
   * @param {Event} event - The click event from the anchor tag.
   */
  function smoothScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const targetId = href.substring(1); // remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 6.5 * 16; // 6rem in pixels (assuming 1rem = 16px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
</script>

<!-- Add the fixed header -->
<header
  class="w-full flex justify-center items-center h-24 border-b border-gray-700 bg-white/10 backdrop-blur-md fixed top-0 z-50"
>
  <nav class="w-10/12 flex md:justify-center items-center">
    <!-- Navigation Links -->
    <div class="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-8">
      <div>
        <!-- Use onclick to trigger our custom scroll function -->
        <a href="#me" onclick={smoothScroll} class="p-2 hover:underline"
          >About Me</a
        >
      </div>
      <div>
        <a href="#work" onclick={smoothScroll} class="p-2 hover:underline"
          >Experience</a
        >
      </div>
      <div>
        <a
          href="#certification"
          onclick={smoothScroll}
          class="p-2 hover:underline">Certifications</a
        >
      </div>
      <div>
        <a href="#projects" onclick={smoothScroll} class="p-2 hover:underline"
          >Projects</a
        >
      </div>
      <div>
        <a href="#education" onclick={smoothScroll} class="p-2 hover:underline"
          >Education</a
        >
      </div>
      <div>
        <a href={personalInfo.linkedin} class="flex items-center gap-2"
          ><span>CV</span> <ExternalLinkIcon size={16} />
        </a>
      </div>
    </div>
    <div class="md:hidden">
      <button
        onclick={() => (isMenuOpen = !isMenuOpen)}
        class="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
      >
        {#if isMenuOpen}
          <XIcon size={28} color="black" />
        {:else}
          <MenuIcon size={28} color="black" />
        {/if}
      </button>
    </div>
  </nav>
</header>

{#if isMenuOpen}
  <div
    class="md:hidden fixed top-24 left-0 w-full h-screen bg-white/10 backdrop-blur-lg flex flex-col items-center gap-6 py-8 z-40"
  >
    <div>
      <a
        href="#me"
        onclick={smoothScroll}
        class="p-2 hover:text-cyan-400 transition-colors text-xl">About Me</a
      >
    </div>
    <div>
      <a
        href="#work"
        onclick={smoothScroll}
        class="p-2 hover:text-cyan-400 transition-colors text-xl">Experience</a
      >
    </div>
    <div>
      <a
        href="#projects"
        onclick={smoothScroll}
        class="p-2 hover:text-cyan-400 transition-colors text-xl">Projects</a
      >
    </div>
    <div>
      <a
        href="#education"
        onclick={smoothScroll}
        class="p-2 hover:text-cyan-400 transition-colors text-xl">Education</a
      >
    </div>
    <div>
      <a
        href="#certifications"
        onclick={smoothScroll}
        class="p-2 hover:text-cyan-400 transition-colors text-xl"
        >Certifications</a
      >
    </div>
    <div class="mt-4">
      <a href={personalInfo.linkedin} class="flex items-center gap-2"
        ><span>CV</span> <ExternalLinkIcon size={16} />
      </a>
    </div>
  </div>
{/if}

<main class="relative w-full">
  <!-- Full-screen background image -->
  <img
    src="images/bg.svg"
    alt="Abstract background graphic"
    class="fixed h-screen w-screen -z-10"
  />

  <!-- Hero Section -->
  <section
    id="me"
    class="relative flex justify-center h-screen w-10/12 items-center gap-12 mx-auto"
  >
    <p class="absolute bottom-1/6 right-0 rotate-90">SCROLL</p>
    <div class="flex justify-center flex-col gap-8">
      <div class="relative w-fit">
        <h1 class="text-8xl">Hi, I am Zulfikar</h1>
        <img
          src="images/decoration-1.png"
          width="200"
          class="absolute -top-15 right-0"
          alt="Decorative element"
        />
      </div>
      <p class="w-2xl text-base/relaxed">{personalInfo.summary}</p>
      <div class="flex gap-8">
        <a href={personalInfo.linkedin} class="flex items-center gap-2"
          ><span>CV</span> <ExternalLinkIcon size={16} />
        </a>
        <a href={personalInfo.linkedin} class="flex items-center gap-2"
          ><span>LinkedIn</span><ExternalLinkIcon size={16} /></a
        >
        <a href={personalInfo.github} class="flex items-center gap-2"
          ><span>Github</span><ExternalLinkIcon size={16} /></a
        >
      </div>
    </div>
    <div>
      <img
        src="images/head-illustration.svg"
        alt="Illustration of a person's head"
        class=""
        width="250"
        loading="lazy"
      />
    </div>
  </section>

  <Section title="Work Experience" id="work">
    <div class="space-y-8">
      {#each experience as item}
        <ExperienceItem {item} />
      {/each}
    </div>
  </Section>

  <Section title="Certifications" id="certification">
    <div class="space-y-8 w-10/12">
      {#each certifications as certification}
        <Certification item={certification} />
      {/each}
    </div>
  </Section>

  <Section title="Projects" id="projects">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </Section>

  <Section title="Education" id="education">
    <div class="space-y-8">
      {#each education as edu}
        <Education item={edu} />
      {/each}
    </div>
  </Section>
</main>
