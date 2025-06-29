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
    isMenuOpen = false;
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

<svelte:head>
  <title>Zulfikar's Portfolio</title>
</svelte:head>

<header
  class="w-full flex justify-center items-center h-24 border-b border-gray-700 bg-white/10 backdrop-blur-md fixed top-0 z-50"
>
  <nav class="w-10/12 flex md:justify-center items-center">
    <div
      class="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-8"
    >
      <div>
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
        <a href={personalInfo.cv} class="flex items-center gap-2 hover:underline"
          ><span>CV</span> <ExternalLinkIcon size={16} />
        </a>
      </div>
    </div>
    <div class="md:hidden">
      <button
        onclick={() => (isMenuOpen = !isMenuOpen)}
        class="p-2 text-gray-300 hover:underline transition-colors"
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
        class="p-2 hover:underline transition-colors text-xl">About Me</a
      >
    </div>
    <div>
      <a
        href="#work"
        onclick={smoothScroll}
        class="p-2 hover:underline transition-colors text-xl">Experience</a
      >
    </div>
    <div>
      <a
        href="#certification"
        onclick={smoothScroll}
        class="p-2 hover:underline transition-colors text-xl"
        >Certifications</a
      >
    </div>
    <div>
      <a
        href="#projects"
        onclick={smoothScroll}
        class="p-2 hover:underline transition-colors text-xl">Projects</a
      >
    </div>
    <div>
      <a
        href="#education"
        onclick={smoothScroll}
        class="p-2 hover:underline transition-colors text-xl">Education</a
      >
    </div>
    <div class="mt-4">
      <a href={personalInfo.cv} class="flex items-center gap-2"
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
    aria-hidden="true"
  />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 mb-8">
    <!-- Responsive Hero Section -->
    <section
      id="me"
      class="relative flex justify-center min-h-[calc(100vh-6rem)] w-full items-center"
    >
      <p
        class="absolute bottom-1/4 -right-8 rotate-90 tracking-widest hidden md:inline-block"
      >
        SCROLL
      </p>

      <div
        class="flex flex-col-reverse text-center items-center gap-12 lg:flex-row-reverse lg:gap-8 lg:text-left"
      >
        <!-- Right side illustration -->
        <div class="w-10/12 lg:w-auto">
          <img
            src="images/me.jpg"
            class="rounded-es-[4rem] rounded-tr-[4rem] w-full max-w-xs mx-auto lg:max-w-sm h-auto"
            loading="lazy"
            alt="Zulfikar's headshot picture"
          />
        </div>

        <!-- Left side content block -->
        <div class="flex flex-col gap-8 items-center lg:items-start">
          <div class="relative w-fit">
            <!-- Responsive heading -->
            <h1 class="text-5xl sm:text-6xl lg:text-8xl font-extrabold">
              Hi, Saya {personalInfo.name.split(" ")[0]}
            </h1>
            <!-- Decorative image -->
            <img
              src="images/decoration-1.png"
              width="200"
              class="absolute -top-8 -right-12 lg:-top-14 lg:-right-16 w-[120px] lg:w-[200px] hidden xl:inline-block"
              alt="Decorative element"
              aria-hidden="true"
            />
          </div>
          <!-- Responsive paragraph with max-width -->
          <p class="max-w-2xl text-base/loose">{personalInfo.summary}</p>

          <!-- Social and CV links -->
          <div
            class="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8"
          >
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:underline transition-colors"
              ><span>CV</span> <ExternalLinkIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:underline transition-colors"
              ><span>LinkedIn</span><ExternalLinkIcon size={16} /></a
            >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:underline transition-colors"
              ><span>Github</span><ExternalLinkIcon size={16} /></a
            >
            <a
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:underline transition-colors"
              ><span>Email</span><ExternalLinkIcon size={16} /></a
            >
          </div>
        </div>
      </div>
    </section>
  </div>

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
