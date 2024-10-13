<script lang="ts">
  import Picture from "./Picture.svelte";
  export let page = 0;

  // TODO: Update interface to afford multiple images per milestone
  interface Milestone {
    title?: string;
    description: string;
    picture?: {
      src: string;
      alt?: string;
    };
  }

  interface ContentSection {
    year?: string;
    milestones?: Milestone[];
    title?: string;
    description?: string;
    picture?: {
      src: string;
      alt?: string;
    };
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
            {
              title: "BEGINNING OF HERL'S JOURNEY",
              description: `
                A monumental achievement for veterans and people with disabilities.
                The Human Engineering Research Laboratories (HERL) teamed up with the
                University of Pittsburgh, the Paralyzed Veterans of America (PVA), and
                the Department of Veterans Affairs (VA) to establish a pioneering lab.
                This new space was to be located within a VA facility in Highland
                Drive. The partnership brought together the expertise of researchers,
                engineers, and medical professionals which leveraged their collective
                knowledge and resources. This collaboration set the stage for
                innovative advancements in assistive technology that make a profound
                impact for individuals with disabilities.
              `,
            },
          ],
        },
        {
          year: "1995",
          milestones: [
            {
              title: "SMARTWHEEL",
              description: `
                Revolutionized how wheelchair setups could be customized
                to optimize the reduction of repetitive stress.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_06_Image_0001.webp",
                alt: "Dr. Alicia Koontz with a SMARTWheel.",
              },
            },
            {
              title: "REHABILITATION ENGINEERING APPLIED TO MOBILITY",
              description: `
                A textbook that set
                the standard for engineering textbooks in the field of
                rehabilitation.
              `,
            },
            {
              title: "X-BRACE",
              description: `
                Designed to enhance performance, safety, and durability in
                folding wheelchairs.
              `,
            },
            {
              title: "GAMEWHEELS & GAMECYCLE",
              description: `
                The first devices to address and incorporate
                exergaming for people with disabilities.
              `,
            },
          ],
        },
      ],
    },
    3: {
      sections: [
        {
          year: "1996",
          milestones: [
            {
              title: "PUSHRIM-ACTIVATED POWER-ASSIST WHEELCHAIR (PAPAW)",
              description: `
                A joint effort between Yamaha and HERL, it contributed to significant advancements in
                wheelchair tech.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_08_Image_0001.webp",
                alt: "An engineer on the PAPAW.",
              },
            },
            {
              title: "ZERO THROW JOYSTICK",
              description: `
                Gave users the ability to operate their power
                wheelchair with 360° of control.
              `,
            },
            {
              title: "CDC CENTER FOR INJURY RESEARCH AND CONTROL",
              description: `
                This award was bestowed on
                HERL along with the Department of Neurosurgery of Pitt.
              `,
            },
            {
              title: "WHEELCHAIR COMPARISON STUDY",
              description: `
                The first in a long series of studies was
                completed. One study highlighted challenges with wheelchairs’ quality
                and standards non-compliance.
              `,
            },
          ],
        },
        {
          year: "1998",
          milestones: [
            {
              title: "WHEELCHAIR SELECTION AND CONFIGURATION",
              description: `
                This published book is the
                most cited text dedicated to wheelchair design and clinical service
                guidance, being translated in six different languages.
              `,
            },
            {
              title: "NATIONAL VETERAN WHEELCHAIR GAMES",
              description: `
                Pittsburgh hosted the NVWG and
                was given its first VA R&D Center of Excellence for Wheelchairs and
                Associated Rehabilitation Engineering (WARE) award. The beginning of
                a 25+ year legacy..
              `,
            },
          ],
        },
      ],
    },
    4: {
      sections: [
        {
          year: "2000",
          milestones: [
            {
              title: "WHEELCHAIR ROAD LOADS AND WHOLE-BODY VIBRATION",
              description: `
                Successfully addressed and reduced by inventing vibration-damping cushions,
                backrest fittings, and suspension elements to minimize shock, and
                vibration-induced injuries to the neck and back.
              `,
            },
            {
              title: "ASSISTIVE TECHNOLOGY CLINIC IN INDIA",
              description: `
                Rory and Rosemarie Cooper
                worked with colleagues at the Indian Spinal Injuries Centre to
                establish this first-of- its-kind clinic in the region.
              `,
            },
            {
              title: "TELE-REHABILITATION RESEARCH PROGRAM",
              description: `
                HERL was the home of the first
                major iterations of this program, primarily funded by the VA.
              `,
            },
          ],
        },
        {
          year: "2001",
          milestones: [
            {
              title: "ERGONOMIC DUAL SURFACEWHEELCHAIR PUSHRIM",
              description: `
                The Ergonomic Pushrim (left)
                developed by HERL’s team, marked a significant leap from traditional
                wheelchair handrims. Ergonomic hand rims have successfully tackled
                traditional push rim issues by offering a better hand fit, enhancing
                mechanical efficiency during wheelchair propulsion.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_10_Image_0001.webp",
              },
            },
          ],
        },
        {
          year: "2002",
          milestones: [
            {
              title: "DATA LOGGER",
              description: `
                The new, low-power, self-contained Data Logger developed
                by researchers at HERL, provides a reliable method for long-term
                monitoring of manual wheelchair users’ activities in real-world
                environments.
              `,
            },
          ],
        },
      ],
    },
    5: {
      sections: [
        {
          year: "2003",
          milestones: [
            {
              title: "VIRTUAL SEATING COACH",
              description: `
                An innovative technology providing personalized
                wheelchair seating recommendations for enhanced comfort and support,
                brought to commercial market by PERMOBIL.
              `,
            },
            {
              title: "GLIDE CASTER FORK",
              description: `
                Based on oblique angle suspension that maximizes
                vibration dampening in both horizontal and vertical directions, and
                minimizes vibration transfer to the body of the rider, was brought to
                the Market by TiLite, LLC.
              `,
            },
          ],
        },
        {
          year: "2004",
          milestones: [
            {
              title: "STATE OF THE SCIENCE SYMPOSIUM SERIES STARTS",
              description: `
                The State-of-the-Science
                (SoS) symposia started after Dr. Paul Pasquina and Dr. Rory Cooper had
                a discussion about the needs of rehabilitation healthcare providers,
                physical medicine and rehabilitation medicine residents to learn and
                integrate the most current knowledge and practice to provide the
                highest level of care to wounded, injured, and ill service members in
                light of the patients coming to Walter Reed Army Medical Center and
                later Walter Reed National Military Medical Center (WRNMC). The SoS
                brings experts to WRNMC so that there can be greater participation by
                WRNMC providers and residents, and exposes experts to WRNMC and
                Uniformed Services University of Health Sciences.
              `,
            },
          ],
        },
        {
          year: "2005",
          milestones: [
            {
              title: `GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED`,
              description: `
                Dr. Michael Boninger
                (HERL Medical Director 1998-20) spearheaded a team of experts in
                organizing one of the most widely used and referenced documents in the
                field today: a Clinical Practice Guideline (CPG) on Preservation of
                Upper Limb Function Following Spinal Cord Injury (SCI).
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_14_Image_0001.webp",
              },
            },
            {
              title: "OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT",
              description: `
                A patent was awarded for
                this innovative wheelchair design, focusing on effective shock
                absorption for both horizontal and vertical impacts during travel over
                uneven terrain.
              `,
            },
          ],
        },
      ],
    },
    6: {
      sections: [
        {
          year: "2006",
          milestones: [
            {
              title: "QUALITY OF LIFE ENGINEERING RESEARCH CENTER (ERC)",
              description: `
                HERL received this
                award from the National Science Foundation (NSF), along with Carnegie
                Mellon University and other partners.
              `,
            },
          ],
        },
        {
          year: "2007",
          milestones: [
            {
              title:
                "SMART POWER ASSISTANCE MODULE FOR MANUAL WHEELCHAIRS PATENT",
              description: `
                Dr. Rory
                Cooper introduced the PHAATE (Policy, Human Activity Assistive
                Technology Environment) model.
              `,
            },
            {
              title: "TRANSFER ASSESSMENT INSTRUMENT (TAI)",
              description: `
                A groundbreaking clinical tool
                designed for the comprehensive evaluation of transfer skills.
              `,
            },
          ],
        },
        {
          year: "2009",
          milestones: [
            {
              title: "CARE OF THE COMBAT AMPUTEE TEXTBOOK PUBLISHED",
              description: `
                The “Care of the Combat
                Amputee” textbook, revered as the “gold standard” for military
                healthcare providers, plays a pivotal role in improving the quality of
                care for Veterans with traumatic amputations. By providing
                standardized guidelines, it ensures that medical professionals are
                equipped with the knowledge and skills necessary to deliver the best
                possible care. In the long-term care and rehabilitation domain, it
                emphasizes personalized approaches that consider the unique needs of
                each individual.
              `,
            },
          ],
        },
      ],
    },
    7: {
      sections: [
        {
          year: "2010",
          milestones: [
            {
              title: "PERSONAL MOBILITY AND MANIPULATION APPLIANCE",
              description: `
                PerMMA’s the first fully
                robotic mobility and manipulation device for people with disabilities.
                It provides bi-manual (two-arm) coordinated manipulation as well as fluid mobility.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_18_Image_0002.webp",
                alt: "Dr. Cooper and the PerMMA in 2010.",
              },
            },
            {
              title: "VIRTUAL SEATING COACH",
              description: `
                Initiated a series of connected devices
                leveraging AI to promote adherence to clinical guidelines.
              `,
            },
            {
              title:
                "WARRIOR TRANSITION LEADER- MEDICAL REHABILITATION HANDBOOK",
              description: `
                A valuable
                resource created to aid and support military personnel during career
                and life transitions. Over 10,000 copies have been distributed or
                downloaded.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_16_Image_0001.webp",
              },
            },
            {
              title: "PERSONAL VEHICLE PATENT",
              description: `
                A power mobility device designed to improve
                maneuverability on diverse terrains.
              `,
            },
          ],
        },
        {
          year: "2011",
          milestones: [
            {
              title: "HERL MOVES TO BAKERY SQUARE",
              description: `
                In July 2011, HERL relocated from its
                original research lab at the VA’s Highland Drive facility to the newly
                renovated Bakery Square. This move represented a pivotal moment for
                HERL, offering its investigators, staff, and faculty the chance to
                establish a state-of-the-art facility tailored to their specific
                requirements. The transition brought about significant improvements,
                including the addition of a spacious laboratory bay and a dedicated
                machine shop area. HERL celebrated this milestone with an open house
                on August 4th, where they welcomed family, friends, and supporters
                from the VA and Pitt communities.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_18_Image_0001.webp",
                alt: "Inaugurating the Bakery Square site, 2011.",
              },
            },
          ],
        },
      ],
    },
    8: {
      sections: [
        {
          year: "2012",
          milestones: [
            {
              title: "MOBILITY ENHANCEMENT ROBOTIC WHEELCHAIR",
              description: `
                A groundbreaking innovation
                designed for conquering challenging terrains, including curbs, uneven
                surfaces, and steep slopes.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_20_Image_0002.webp",
                alt: "Dr. Jorge Candiotti and the MEBot.",
              },
            },
            {
              title: "VARIABLE COMPLIANCE JOYSTICK",
              description: `
                Equipped with compensation algorithms
                offers adaptable control and enhanced precision in various power
                mobility ops.
              `,
            },
            {
              title: "ROBOTIC STRONGARM",
              description: `
                A specialized wheelchair attachment engineered to
                assist electric power wheelchair users in seamless transfers to and
                from other surfaces.
              `,
            },
            {
              title: "MOBILE CASTER PATENT",
              description: `
                Designed to prevent drift and flutter, ensuring
                enhanced tracking when a mobile device moves across a side-sloped
                surface.
              `,
            },
          ],
        },
        {
          year: "2013",
          milestones: [
            {
              title:
                "USER-ADJUSTABLE WHEELCHAIR BACKREST MOUNTING HARDWARE PATENT",
              description: `
                A
                technology to streamline backrest adjustments for users, improving
                simplicity, aesthetics, and incorporating essential features for
                commercial viability.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_22_Image_0001.webp",
                alt: "The Robotic Strong Arm.",
              },
            },
          ],
        },
      ],
    },
    9: {
      sections: [
        {
          year: "2015",
          milestones: [
            {
              title: "NATIONAL ACADEMY OF INVENTORS",
              description: `
                Dr. Cooper elected Fellow of the NAI,
                partnered with the International Society of Wheelchair Professionals,
                whose mission is to serve as a global resource for wheelchair service
                standards and provision through advocacy, education, standards,
                evidence-based practice, innovation and a platform for information
                exchange.
              `,
            },
            {
              title: "VA TECHNOLOGY TRANSFER ASSISTANCE PROGRAM",
              description: `
                Start of the project which
                engages in a wide range of healthcare, research, and support
                initiatives for veterans, with a core mission of enhancing veterans’
                quality of life and healthcare outcomes.
              `,
            },
            {
              title: "SAMUEL E. HEYMAN SERVICE TO AMERICA MEDAL",
              description: `
                Also known as the “Sammies”,
                this premier awards program is considered the “Oscar” of public
                service.
              `,
            },
            {
              title: "DRIVING EVALUATION AND TRAINING PATENT",
              description: `
                Covers techniques for assessing
                and enhancing driving skills through evaluation and training
                processes.
              `,
            },
          ],
        },
        {
          year: "2017",
          milestones: [
            {
              title: "PNEUCHAIR & PNEUSCOOTER",
              description: `
                The PneuMobility project is focused on
                revolutionizing assistive mobility devices by developing innovative
                devices that run solely on compressed air technology.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_24_Image_0002.webp",
                alt: "Dr. Rory Cooper at Morgan’s Wonderland with the Pneuchair.",
              },
            },
          ],
        },
      ],
    },
    10: {
      sections: [
        {
          year: "2018",
          milestones: [
            {
              title: "POWERED PERSONAL TRANSFER SYSTEM (PPTS)",
              description: `
                A groundbreaking innovation
                designed to revolutionize the process of transferring between a bed
                and a wheelchair, particularly for individuals, including many
                veterans, who depend on wheelchairs for mobility.
              `,
            },
            {
              title: "GUIDELINES FOR THE CARE OF PEOPLE WITH SPINA BIFIDA",
              description: `
                One hundred Spina
                Bifida experts from around the world, led by HERL Medical Director Dr.
                Brad Dicianno, spent three years developing these Guidelines.
              `,
            },
          ],
        },
        {
          year: "2019",
          milestones: [
            {
              title:
                "AUTOMATED VEHICLE SERVICES FOR PEOPLE WITH DISABILITIES — INVOLVED RESPONSIVE ENGINEERING (ASPIRE)",
              description: `
                A HERL center studying how people with
                disabilities and older adults are affected by access to reliable
                accessible transportation.
              `,
              picture: {
                src: "./src/images/content/2024_Cal_Copy_Page_26_Image_0001.webp",
                alt: "Nikitha Deepak handling an electric wheelchair outside of the Bakery Square offices.",
              },
            },
            {
              title:
                "MANUAL WHEELCHAIR ULCER RISK MANAGEMENT COACHING SYSTEM AND METHODOLOGY PATENT",
              description: "",
            },
          ],
        },
        {
          year: "2020",
          milestones: [
            {
              title:
                "PORTABLE TOILET SEAT WRAP FOR REDUCING PRESSURE INJURIES AND METHODS (“ON THE MOVE PAD”) PATENT",
              description: "",
            },
          ],
        },
      ],
    },
    11: {
      sections: [
        {
          year: "2021",
          milestones: [
            {
              title: `GUIDELINES ON “UPPER LIMB PRESERVATION” RELEASED`,
              description: `
                Dr. Michael Boninger
                (HERL Medical Director 1998-20) spearheaded a team of experts in
                organizing one of the most widely used and referenced documents in the
                field today: a Clinical Practice Guideline (CPG) on Preservation of
                Upper Limb Function Following Spinal Cord Injury (SCI).
              `,
            },
            {
              title: "OASCF (OBLIQUE SUSPENSION CASTER FORK) PATENT",
              description: `
                A patent was awarded for
                this innovative wheelchair design, focusing on effective shock
                absorption for both horizontal and vertical impacts during travel over
                uneven terrain.
              `,
            },
          ],
        },
        {
          year: "2022",
          milestones: [
            {
              title: "IEEE BIOMEDICAL ENGINEERING MEDAL",
              description: `
                Dr. Cooper was honored with this
                prestigious award for his outstanding contributions to the field of
                biomedical engineering. This recognition highlights his achievements
                and groundbreaking research that have significantly advanced the
                intersection of engineering and medicine.
              `,
            },
          ],
        },
      ],
    },
    12: {
      sections: [
        {
          year: "2023",
          milestones: [
            {
              title: "NATIONAL INVENTORS HALL OF FAME",
              description: `
                Dr. Rory Cooper was inducted to the
                50th class.
              `,
            },
            {
              title: "NATIONAL MEDAL OF TECHNOLOGY AND INNOVATION",
              description: `
                Dr. Cooper was presented
                this award by President Biden at the White House. This accolade is
                given to individuals who have made important contributions to the
                advancement of knowledge.
              `,
            },
          ],
        },
      ],
    },
    13: {
      sections: [
        {
          title: " ",
          description: " ",
          picture: {
            src: "./src/images/Timeline.png",
            alt: "Parallel Paths",
          },
        },
      ],
    },
  };

  // Generate data of current page reactively
  $: currentPageData = contentData[page]?.sections || [];
</script>

<div class="content-container">
  {#if currentPageData.length}
    <div class="content-wrapper">
      {#if page === 1}
        <div class="mission-vision-layout">
          <div class="image-column">
            <Picture
              src="./src/images/content/2024_Cal_Copy_Page_04_Image_0001.webp"
              alt="Left to right: Edward DesLauriers (KPVA), Dr. Wes Rohr (Pitt) , John
Bollinger (PVA), Dr. Thomas P. Detre, (Pitt) ,Dr. Rory A. Cooper (VA/Pitt) ,
Laura Miller (VA), Dr. Charles Robinson (Pitt)."
            />
          </div>
          <div class="text-column">
            {#each currentPageData as section}
              <div class="info-section">
                <div class="info-content">
                  <h1 class="title">{section.title}</h1>
                  <p class="description">{section.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        {#each currentPageData as section}
          {#if section.year}
            <div class="year-section">
              <h2 class="sub-title">{section.year}</h2>
              {#if section.milestones}
                <div
                  class="milestones-grid"
                  style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
                >
                  {#each section.milestones as milestone}
                    <div class="milestone-item">
                      {#if milestone.picture}
                        <Picture
                          src={milestone.picture.src}
                          alt={milestone.picture.alt}
                        />
                      {/if}
                      <div class="milestone-content">
                        {#if milestone.title}
                          <p><strong>{milestone.title}</strong></p>
                        {/if}
                        <p>{milestone.description}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          {:else if section.title && section.description}
            <div class="info-section">
              {#if section.picture}
                <Picture src={section.picture.src} alt={section.picture.alt} />
              {/if}
              <div class="info-content">
                <h1 class="title">{section.title}</h1>
                <p class="description">{section.description}</p>
              </div>
            </div>
          {/if}
        {/each}
      {/if}
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
    max-height: 50vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .sub-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    text-align: center;
    width: 100%;
  }

  .milestones-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .milestone-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: #fefefe;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #efefef;
    font-size: 0.875rem;
  }

  :global(.dark) .milestone-item {
    background: #121a28;
    border-color: #3a4556;
  }

  .year-section {
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.4;
  }

  @media (max-width: 480px), (max-height: 600px) {
    .content-container {
      width: 90%;
      padding: 0.75rem;
      top: 55%;
      transform: translate(-50%, -55%);
    }

    .title {
      font-size: 1.25rem;
    }

    .description {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px), (max-height: 800px) {
    .content-container {
      width: 85%;
      padding: 1rem;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .title {
      font-size: 1.5rem;
    }

    .description {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 1024px), (max-height: 900px) {
    .content-container {
      width: 80%;
      padding: 1.5rem;
      top: 45%;
      transform: translate(-50%, -20%);
    }

    .title {
      font-size: 1.6rem;
    }

    .description {
      font-size: 0.9rem;
    }
  }

  @media (max-height: 600px) {
    .content-container {
      top: 55%;
      transform: translate(-50%, -40%);
    }

    .title {
      font-size: 1.125rem;
    }

    .description {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 1.125rem;
    }

    .description {
      font-size: 0.7rem;
    }
  }

  .mission-vision-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .image-column {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-column {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    .mission-vision-layout {
      grid-template-columns: 1fr;
    }
    .content-container {
      overflow-y: auto;
    }
  }
</style>
