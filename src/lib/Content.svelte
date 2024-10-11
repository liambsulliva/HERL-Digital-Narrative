<script lang="ts">
  export let page = 0;

  interface ContentSection {
    // For Milestones
    year?: string;
    milestones?: string[];
    // For Mission + Vision + Parallel Paths
    title?: string;
    description?: string;
  }

  const contentData: Record<number, { sections: ContentSection[] }> = {
    1: {
      sections: [
        {
          title: "Our Mission",
          description: `
            To continuously improve the mobility and function of people with
            disabilities through advanced engineering in clinical research and
            medical rehabilitation.
          `,
        },
        {
          title: "Our Vision",
          description: `
            To create a world where all people with disabilities have unencumbered
            mobility and function so that they can fully participate in and
            contribute to society. Left to right: Edward DesLauriers (KPVA), Dr.
            Wes Rohr (Pitt), John Bollinger (PVA), Dr. Thomas P. Detre, (Pitt),
            Dr. Rory A. Cooper (VA/Pitt), Laura Miller (VA), Dr. Charles Robinson
            (Pitt).
          `,
        },
      ],
    },
    2: {
      sections: [
        {
          year: "1994",
          milestones: [
            `A monumental achievement for veterans and people with disabilities.
            The Human Engineering Research Laboratories (HERL) teamed up with the
            University of Pittsburgh, the Paralyzed Veterans of America (PVA), and
            the Department of Veterans Affairs (VA) to establish a pioneering lab.
            This new space was to be located within a VA facility in Highland
            Drive. The partnership brought together the expertise of researchers,
            engineers, and medical professionals which leveraged their collective
            knowledge and resources. This collaboration set the stage for
            innovative advancements in assistive technology that make a profound
            impact for individuals with disabilities.`,
          ],
        },
        {
          year: "1995",
          milestones: [
            `SMARTWHEEL: Revolutionized how wheelchair setups could be customized
            to optimize the reduction of repetitive stress.`,
            `REHABILITATION ENGINEERING APPLIED TO MOBILITY: A textbook that set
            the standard for engineering textbooks in the field of
            rehabilitation.`,
            `X-BRACE: Designed to enhance performance, safety, and durability in
            folding wheelchairs.`,
            `GAMEWHEELS & GAMECYCLE: The first devices to address and incorporate
            exergaming for people with disabilities.`,
          ],
        },
      ],
    },
    3: {
      sections: [
        {
          year: "1996",
          milestones: [
            `PUSHRIM-ACTIVATED POWER-ASSIST WHEELCHAIR (PAPAW): A joint effort
            between Yamaha and HERL, it contributed to significant advancements in
            wheelchair tech.`,
            `ZERO THROW JOYSTICK: Gave users the ability to operate their power
            wheelchair with 360° of control.`,
            `CDC CENTER FOR INJURY RESEARCH AND CONTROL: This award was bestowed on
            HERL along with the Department of Neurosurgery of Pitt.`,
            `WHEELCHAIR COMPARISON STUDY: The first in a long series of studies was
            completed. One study highlighted challenges with wheelchairs’ quality
            and standards non-compliance.`,
          ],
        },
        {
          year: "1998",
          milestones: [
            `WHEELCHAIR SELECTION AND CONFIGURATION: This published book is the
            most cited text dedicated to wheelchair design and clinical service
            guidance, being translated in six different languages.`,
            `NATIONAL VETERAN WHEELCHAIR GAMES: Pittsburgh hosted the NVWG and
            was given its first VA R&D Center of Excellence for Wheelchairs and
            Associated Rehabilitation Engineering (WARE) award. The beginning of
            a 25+ year legacy..`,
          ],
        },
        {
          year: "2000",
          milestones: [
            `WHEELCHAIR ROAD LOADS AND WHOLE-BODY VIBRATION: Successfully
            addressed and reduced by inventing vibration-damping cushions,
            backrest fittings, and suspension elements to minimize shock, and
            vibration-induced injuries to the neck and back.`,
            `ASSISTIVE TECHNOLOGY CLINIC IN INDIA: Rory and Rosemarie Cooper
            worked with colleagues at the Indian Spinal Injuries Centre to
            establish this first-of- its-kind clinic in the region.`,
            `TELE-REHABILITATION RESEARCH PROGRAM: HERL was the home of the first
            major iterations of this program, primarily funded by the VA.`,
          ],
        },
      ],
    },
    4: {
      sections: [
        {
          year: "2001",
          milestones: [
            `ERGONOMIC DUAL SURFACEWHEELCHAIR PUSHRIM: The Ergonomic Pushrim (left)
            developed by HERL’s team, marked a significant leap from traditional
            wheelchair handrims. Ergonomic hand rims have successfully tackled
            traditional push rim issues by offering a better hand fit, enhancing
            mechanical efficiency during wheelchair propulsion.`,
          ],
        },
        {
          year: "2002",
          milestones: [
            `DATA LOGGER: The new, low-power, self-contained Data Logger developed
            by researchers at HERL, provides a reliable method for long-term
            monitoring of manual wheelchair users’ activities in real-world
            environments.`,
          ],
        },
        {
          year: "2003",
          milestones: [
            `VIRTUAL SEATING COACH: An innovative technology providing personalized
            wheelchair seating recommendations for enhanced comfort and support,
            brought to commercial market by PERMOBIL.`,
            `GLIDE CASTER FORK: Based on oblique angle suspension that maximizes
            vibration dampening in both horizontal and vertical directions, and
            minimizes vibration transfer to the body of the rider, was brought to
            the Market by TiLite, LLC.`,
          ],
        },
        {
          year: "2004",
          milestones: [
            `STATE OF THE SCIENCE SYMPOSIUM SERIES STARTS: The State-of-the-Science
            (SoS) symposia started after Dr. Paul Pasquina and Dr. Rory Cooper had
            a discussion about the needs of rehabilitation healthcare providers,
            physical medicine and rehabilitation medicine residents to learn and
            integrate the most current knowledge and practice to provide the
            highest level of care to wounded, injured, and ill service members in
            light of the patients coming to Walter Reed Army Medical Center and
            later Walter Reed National Military Medical Center (WRNMC). The SoS
            brings experts to WRNMC so that there can be greater participation by
            WRNMC providers and residents, and exposes experts to WRNMC and
            Uniformed Services University of Health Sciences.`,
          ],
        },
        {
          year: "2005",
          milestones: [
            `GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED: Dr. Michael Boninger
            (HERL Medical Director 1998-20) spearheaded a team of experts in
            organizing one of the most widely used and referenced documents in the
            field today: a Clinical Practice Guideline (CPG) on Preservation of
            Upper Limb Function Following Spinal Cord Injury (SCI).`,
            `OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT: A patent was awarded for
            this innovative wheelchair design, focusing on effective shock
            absorption for both horizontal and vertical impacts during travel over
            uneven terrain.`,
          ],
        },
      ],
    },
    5: {
      sections: [
        {
          year: "2006",
          milestones: [
            `QUALITY OF LIFE ENGINEERING RESEARCH CENTER (ERC): HERL received this
            award from the National Science Foundation (NSF), along with Carnegie
            Mellon University and other partners.`,
          ],
        },
        {
          year: "2007",
          milestones: [
            `SMART POWER ASSISTANCE MODULE FOR MANUAL WHEELCHAIRS PATENT: Dr. Rory
            Cooper introduced the PHAATE (Policy, Human Activity Assistive
            Technology Environment) model.`,
            `TRANSFER ASSESSMENT INSTRUMENT (TAI): A groundbreaking clinical tool
            designed for the comprehensive evaluation of transfer skills.`,
          ],
        },
        {
          year: "2009",
          milestones: [
            `CARE OF THE COMBAT AMPUTEE TEXTBOOK PUBLISHED: The “Care of the Combat
            Amputee” textbook, revered as the “gold standard” for military
            healthcare providers, plays a pivotal role in improving the quality of
            care for Veterans with traumatic amputations. By providing
            standardized guidelines, it ensures that medical professionals are
            equipped with the knowledge and skills necessary to deliver the best
            possible care. In the long-term care and rehabilitation domain, it
            emphasizes personalized approaches that consider the unique needs of
            each individual.`,
          ],
        },
        {
          year: "2010",
          milestones: [
            `PERSONAL MOBILITY AND MANIPULATION APPLIANCE PerMMA’s the first fully
            robotic mobility and manipulation device for people with disabilities.
            It provides bi-manual (two-arm) coordinated manipulation as well as fluid mobility.`,
            `VIRTUAL SEATING COACH: Initiated a series of connected devices
            leveraging AI to promote adherence to clinical guidelines.`,
            `WARRIOR TRANSITION LEADER- MEDICAL REHABILITATION HANDBOOK: A valuable
            resource created to aid and support military personnel during career
            and life transitions. Over 10,000 copies have been distributed or
            downloaded.`,
            `PERSONAL VEHICLE PATENT: A power mobility device designed to improve
            maneuverability on diverse terrains.`,
          ],
        },
      ],
    },
    6: {
      sections: [
        {
          year: "2011",
          milestones: [
            `HERL MOVES TO BAKERY SQUARE: In July 2011, HERL relocated from its
            original research lab at the VA’s Highland Drive facility to the newly
            renovated Bakery Square. This move represented a pivotal moment for
            HERL, offering its investigators, staff, and faculty the chance to
            establish a state-of-the-art facility tailored to their specific
            requirements. The transition brought about significant improvements,
            including the addition of a spacious laboratory bay and a dedicated
            machine shop area. HERL celebrated this milestone with an open house
            on August 4th, where they welcomed family, friends, and supporters
            from the VA and Pitt communities.`,
          ],
        },
        {
          year: "2012",
          milestones: [
            `MOBILITY ENHANCEMENT ROBOTIC WHEELCHAIR: A groundbreaking innovation
            designed for conquering challenging terrains, including curbs, uneven
            surfaces, and steep slopes.`,
            `VARIABLE COMPLIANCE JOYSTICK: Equipped with compensation algorithms
            offers adaptable control and enhanced precision in various power
            mobility ops.`,
            `ROBOTIC STRONGARM: A specialized wheelchair attachment engineered to
            assist electric power wheelchair users in seamless transfers to and
            from other surfaces.`,
            `MOBILE CASTER PATENT: Designed to prevent drift and flutter, ensuring
            enhanced tracking when a mobile device moves across a side-sloped
            surface.`,
            `USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT: A
            technology to streamline backrest adjustments for users, improving
            simplicity, aesthetics, and incorporating essential features for
            commercial viability.`,
            `GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED: Dr. Michael Boninger
            (HERL Medical Director 1998-20) spearheaded a team of experts in
            organizing one of the most widely used and referenced documents in the
            field today: a Clinical Practice Guideline (CPG) on Preservation of
            Upper Limb Function Following Spinal Cord Injury (SCI).`,
          ],
        },
        {
          year: "2013",
          milestones: [
            `USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT: A
            technology to streamline backrest adjustments for users, improving
            simplicity, aesthetics, and incorporating essential features for
            commercial viability.`,
          ],
        },
        {
          year: "2015",
          milestones: [
            `NATIONAL ACADEMY OF INVENTORS: Dr. Cooper elected Fellow of the NAI,
            partnered with the International Society of Wheelchair Professionals,
            whose mission is to serve as a global resource for wheelchair service
            standards and provision through advocacy, education, standards,
            evidence-based practice, innovation and a platform for information
            exchange.`,
            `VA TECHNOLOGY TRANSFER ASSISTANCE PROGRAM: Start of the project which
            engages in a wide range of healthcare, research, and support
            initiatives for veterans, with a core mission of enhancing veterans’
            quality of life and healthcare outcomes.`,
            `SAMUEL E. HEYMAN SERVICE TO AMERICA MEDAL: Also known as the “Sammies”,
            this premier awards program is considered the “Oscar” of public
            service.`,
            `DRIVING EVALUATION AND TRAINING PATENT: Covers techniques for assessing
            and enhancing driving skills through evaluation and training
            processes.`,
          ],
        },
      ],
    },
    7: {
      sections: [
        {
          year: "2017",
          milestones: [
            `PNEUCHAIR & PNEUSCOOTER: The PneuMobility project is focused on
            revolutionizing assistive mobility devices by developing innovative
            devices that run solely on compressed air technology.`,
          ],
        },
        {
          year: "2018",
          milestones: [
            `POWERED PERSONAL TRANSFER SYSTEM (PPTS): A groundbreaking innovation
            designed to revolutionize the process of transferring between a bed
            and a wheelchair, particularly for individuals, including many
            veterans, who depend on wheelchairs for mobility.`,
            `GUIDELINES FOR THE CARE OF PEOPLE WITH SPINA BIFIDA: One hundred Spina
            Bifida experts from around the world, led by HERL Medical Director Dr.
            Brad Dicianno, spent three years developing these Guidelines.`,
          ],
        },
        {
          year: "2019",
          milestones: [
            `AUTOMATED VEHICLE SERVICES FOR PEOPLE WITH DISABILITIES — INVOLVED
            RESPONSIVE ENGINEERING (ASPIRE): A HERL center studying how people with
            disabilities and older adults are affected by access to reliable
            accessible transportation.`,
            `MANUAL WHEELCHAIR ULCER RISK MANAGEMENT COACHING SYSTEM AND
            METHODOLOGY PATENT.`,
          ],
        },
        {
          year: "2020",
          milestones: [
            `PORTABLE TOILET SEAT WRAP FOR REDUCING PRESSURE INJURIES AND METHODS
            (“ON THE MOVE PAD”) PATENT.`,
          ],
        },
        {
          year: "2021",
          milestones: [
            `GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED: Dr. Michael Boninger
            (HERL Medical Director 1998-20) spearheaded a team of experts in
            organizing one of the most widely used and referenced documents in the
            field today: a Clinical Practice Guideline (CPG) on Preservation of
            Upper Limb Function Following Spinal Cord Injury (SCI).`,
            `OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT: A patent was awarded for
            this innovative wheelchair design, focusing on effective shock
            absorption for both horizontal and vertical impacts during travel over
            uneven terrain.`,
          ],
        },
        {
          year: "2022",
          milestones: [
            `IEEE BIOMEDICAL ENGINEERING MEDAL: Dr. Cooper was honored with this
            prestigious award for his outstanding contributions to the field of
            biomedical engineering. This recognition highlights his achievements
            and groundbreaking research that have significantly advanced the
            intersection of engineering and medicine.`,
          ],
        },
        {
          year: "2023",
          milestones: [
            `NATIONAL INVENTORS HALL OF FAME: Dr. Rory Cooper was inducted to the
            50th class.`,
            `NATIONAL MEDAL OF TECHNOLOGY AND INNOVATION: Dr. Cooper was presented
            this award by President Biden at the White House. This accolade is
            given to individuals who have made important contributions to the
            advancement of knowledge.`,
          ],
        },
      ],
    },
    13: {
      sections: [
        {
          title: "Parallel Paths",
          description: `
            <div class="parallel-paths">
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
            </div>
          `,
        },
      ],
    },
  };
</script>

<div class="content-container">
  <!-- If the page exists -->
  {#if contentData[page as keyof Record<number, ContentSection>]}
    <div class="content-wrapper">
      <!-- Iterate over the sections of the page -->
      {#each contentData[page as keyof Record<number, ContentSection>].sections as section}
        <!-- If the section has a year -->
        {#if section.year}
          <div class="year-section">
            <h2 class="sub-title">{section.year}</h2>
            <!-- If the section has milestones, print them in a dynamic grid -->
            {#if section.milestones}
              <div
                class="milestones-grid"
                style="grid-template-columns: repeat({section.milestones
                  .length}, 1fr);"
              >
                <!-- Iterate over the milestones -->
                {#each section.milestones as milestone}
                  <div class="milestone-item">
                    <p>{milestone}</p>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {:else if section.title && section.description}
          <!-- If the section has a title and description instead, print it -->
          <div class="info-section">
            <h1 class="title">{section.title}</h1>
            <p class="description">{section.description}</p>
          </div>
        {/if}
      {/each}
    </div>
  {:else}
    <p>No content available for this page.</p>
  {/if}
</div>

<style>
  .content-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    max-width: 1200px;
    z-index: 30;
    max-height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 2rem;
    box-sizing: border-box;
  }

  .sub-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
  }

  .milestones-grid {
    display: grid;
    gap: 1.5rem;
  }

  .milestone-item {
    background: #fefefe;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #efefef;
  }

  .year-section {
    margin-bottom: 2rem;
  }

  .info-section {
    text-align: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.5;
  }

  .parallel-paths {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
  }

  .path {
    width: 24rem;
    height: 3rem;
    background: #4299e1;
    border-radius: 9999px;
  }

  .custom-content {
    text-align: center;
  }

  @media (max-width: 1024px) {
    .milestones-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .milestones-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }

  @media (max-width: 480px) {
    .milestones-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px), (max-height: 600px) {
    .content-container {
      width: 90%;
      padding: 1rem;
      top: 55%;
      transform: translate(-50%, -55%);
    }

    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.875rem;
    }

    .parallel-paths .path {
      width: 18rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 768px), (max-height: 800px) {
    .content-container {
      width: 85%;
      padding: 1.5rem;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .title {
      font-size: 1.75rem;
    }

    .description {
      font-size: 0.95rem;
    }

    .parallel-paths .path {
      width: 20rem;
      height: 2.75rem;
    }
  }

  @media (max-width: 1024px), (max-height: 900px) {
    .content-container {
      width: 80%;
      padding: 2rem;
      top: 45%;
      transform: translate(-50%, -20%);
    }

    .title {
      font-size: 1.875rem;
    }

    .description {
      font-size: 0.975rem;
    }

    .parallel-paths .path {
      width: 22rem;
      height: 2.8rem;
    }
  }

  @media (max-height: 600px) {
    .content-container {
      top: 55%;
      transform: translate(-50%, -40%);
    }

    .title {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.8rem;
    }

    .parallel-paths .path {
      width: 16rem;
      height: 2.3rem;
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.8rem;
    }

    .parallel-paths .path {
      width: 16rem;
      height: 2.3rem;
    }
  }
</style>
