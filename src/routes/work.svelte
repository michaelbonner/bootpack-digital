<script lang="ts">
  import WorkItem from "../components/work-item.svelte";
  import BlackthornSoftware from "../images/work/blackthorn-software.jpg";
  import BlackthornSoftwareWebp from "../images/work/blackthorn-software.jpg?w=300;500;700;900&webp&srcset";
  import BlackthornSoftwareAvif from "../images/work/blackthorn-software.jpg?w=300;500;700;900&avif&srcset";
  import Cosgriff from "../images/work/cosgriff.jpg";
  import CosgriffWebp from "../images/work/cosgriff.jpg?w=300;500;700;900&webp&srcset";
  import CosgriffAvif from "../images/work/cosgriff.jpg?w=300;500;700;900&avif&srcset";
  import DenverWindowWellCovers from "../images/work/denver-window-well-covers.jpg";
  import DenverWindowWellCoversWebp from "../images/work/denver-window-well-covers.jpg?w=300;500;700;900&webp&srcset";
  import DenverWindowWellCoversAvif from "../images/work/denver-window-well-covers.jpg?w=300;500;700;900&avif&srcset";
  import HereKidsWin from "../images/work/here-kids-win.jpg";
  import HereKidsWinWebp from "../images/work/here-kids-win.jpg?w=300;500;700;900&webp&srcset";
  import HereKidsWinAvif from "../images/work/here-kids-win.jpg?w=300;500;700;900&avif&srcset";
  import HeritageOfPreston from "../images/work/heritage-of-preston.jpg";
  import HeritageOfPrestonWebp from "../images/work/heritage-of-preston.jpg?w=300;500;700;900&webp&srcset";
  import HeritageOfPrestonAvif from "../images/work/heritage-of-preston.jpg?w=300;500;700;900&avif&srcset";
  import JeremyMiller from "../images/work/jeremy-miller.jpg";
  import JeremyMillerWebp from "../images/work/jeremy-miller.jpg?w=300;500;700;900&webp&srcset";
  import JeremyMillerAvif from "../images/work/jeremy-miller.jpg?w=300;500;700;900&avif&srcset";
  import JMills from "../images/work/jmills.jpg";
  import JMillsWebp from "../images/work/jmills.jpg?w=300;500;700;900&webp&srcset";
  import JMillsAvif from "../images/work/jmills.jpg?w=300;500;700;900&avif&srcset";
  import KnowYourForce from "../images/work/know-your-force.jpg";
  import KnowYourForceWebp from "../images/work/know-your-force.jpg?w=300;500;700;900&webp&srcset";
  import KnowYourForceAvif from "../images/work/know-your-force.jpg?w=300;500;700;900&avif&srcset";
  import Ravens from "../images/work/ravens.jpg";
  import RavensWebp from "../images/work/ravens.jpg?w=300;500;700;900&webp&srcset";
  import RavensAvif from "../images/work/ravens.jpg?w=300;500;700;900&avif&srcset";
  import TheDoctorsCbd from "../images/work/the-doctors-cbd.jpg";
  import TheDoctorsCbdWebp from "../images/work/the-doctors-cbd.jpg?w=300;500;700;900&webp&srcset";
  import TheDoctorsCbdAvif from "../images/work/the-doctors-cbd.jpg?w=300;500;700;900&avif&srcset";
  import ThunderBiotech from "../images/work/thunder-biotech.jpg";
  import ThunderBiotechWebp from "../images/work/thunder-biotech.jpg?w=300;500;700;900&webp&srcset";
  import ThunderBiotechAvif from "../images/work/thunder-biotech.jpg?w=300;500;700;900&avif&srcset";
  import WasatchCovers from "../images/work/wasatch-covers.jpg";
  import WasatchCoversWebp from "../images/work/wasatch-covers.jpg?w=300;500;700;900&webp&srcset";
  import WasatchCoversAvif from "../images/work/wasatch-covers.jpg?w=300;500;700;900&avif&srcset";

  const seoTitle = "Work | Bootpack Digital";
  const seoDescription =
    "We build engaging, custom experiences for our clients. Here's a few examples we're particularly proud of.";
</script>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription} />
  <meta property="og:title" content={seoTitle} />
  <meta property="og:description" content={seoDescription} />
  <meta name="twitter:title" content={seoTitle} />
  <meta name="twitter:description" content={seoDescription} />
</svelte:head>

<div
  class="relative hero-bg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
>
  <div class="relative max-w-7xl mx-auto">
    <div>
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10"
      >
        Our Work
      </h2>
      <p class="mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">
        We build engaging, custom experiences for our clients. Here's a few
        examples we're particularly proud of.
      </p>
    </div>
    <div
      class="mt-12 grid gap-x-5 gap-y-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
    >
      <WorkItem
        description={`Primary Children's Hospital launched a campaign called "Here Kids Win." As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted. We worked with the talented design team at Faktory to build an engaging experience seen by hundreds of thousands.`}
        link={`https://herekidswin.com/`}
        poster={HereKidsWin}
        posterWebp={HereKidsWinWebp}
        posterAvif={HereKidsWinAvif}
        title={`Primary Children's Hospital | Here Kids Win`}
      />
      <WorkItem
        description={`Wasatch Covers was tired of their WordPress site's performance so we rebuilt the thing using modern technologies. The site now loads in a snap, check it out for yourself. Conversion rates are dramatically up now that customers aren't waiting seconds for a single page to load.`}
        link={`https://wasatchcovers.com/`}
        poster={WasatchCovers}
        posterWebp={WasatchCoversWebp}
        posterAvif={WasatchCoversAvif}
        title={`Wasatch Covers`}
      />
      <WorkItem
        description={`JME FILM CO is an award-winning film studio located on the edge of Salt Lake City. They partner with brands and agencies to craft authentic content, commercials, and heartfelt stories. We partnered with their design team to create a beautiful and engaging experience.`}
        link={`https://www.jmillsent.com/`}
        poster={JMills}
        posterWebp={JMillsWebp}
        posterAvif={JMillsAvif}
        title={`JME Film Co`}
      />
      <WorkItem
        description={`Know Your Force (KYF) is rethinking the way police and communities communicate. QR codes are generated for each employee and can be printed anywhere. The end user scans the QR code, and leaves a review for the representative. We built the platform from the ground up using serverless technology to help the platform scale infinitely. `}
        link={`https://knowyourforce.com/`}
        poster={KnowYourForce}
        posterWebp={KnowYourForceWebp}
        posterAvif={KnowYourForceAvif}
        title={`Know Your Force`}
      />
      <WorkItem
        description={`Heritage Senior Living in Preston, ID reached out to revamp their outdated website. We rebuilt it to help customers find what they're looking for. The new site highlights the facility with lots of photos.`}
        link={`https://www.heritageofpreston.com/`}
        poster={HeritageOfPreston}
        posterWebp={HeritageOfPrestonWebp}
        posterAvif={HeritageOfPrestonAvif}
        title={`Heritage Senior Living`}
      />
      <WorkItem
        description={`Denver Window Well Covers was a ground up build to service the semi-custom needs of Colorado residents. Denver Window Well Covers offers a quality product at the lowest prices on window well covers in Colorado and Denver areas.`}
        link={`https://denverwindowwellcovers.com/`}
        poster={DenverWindowWellCovers}
        posterWebp={DenverWindowWellCoversWebp}
        posterAvif={DenverWindowWellCoversAvif}
        title={`Denver Window Well Covers`}
      />
      <WorkItem
        description={`Jeremy Miller is an award-winning film director based in Salt Lake City, Utah. He wanted a new site that put the focus on the work, so we built him a site that did exactly that in a stylistic way. Be sure to check out the custom Vimeo player on the individual work page; we're pretty proud of that one.`}
        link={`https://jeremymillerdirector.com/`}
        poster={JeremyMiller}
        posterWebp={JeremyMillerWebp}
        posterAvif={JeremyMillerAvif}
        title={`Director Jeremy Miller`}
      />
      <WorkItem
        description={`The Cosgriff school used a site we built about 10 years ago. Needless to say it was time for a fresh coat of paint and a rethink of how the pages were organized. We rebuilt the site from the ground up in ~4 weeks. After comparing analytics the new site clearly outperforms the old site in nearly every measurable way.`}
        link={`https://cosgriff.org/`}
        poster={Cosgriff}
        posterWebp={CosgriffWebp}
        posterAvif={CosgriffAvif}
        title={`J.E. Cosgriff School`}
      />
      <WorkItem
        description={`Thunder Biotech is a cancer research group with huge aspirations. They needed a site that conveyed their purpose and vision. We worked with the team at Faktory to build a site to accomplish their goals.`}
        link={`https://thunderbiotech.com/`}
        poster={ThunderBiotech}
        posterWebp={ThunderBiotechWebp}
        posterAvif={ThunderBiotechAvif}
        title={`Thunder Biotech`}
      />
      <WorkItem
        description={`As skilled technicians with a unique sensibility for storytelling, RAVENS are poised to execute nearly any mission from heavy lift aerials to pursuit tracking or technical phantom flex high speed work.`}
        link={`https://ravensfilmworks.com/`}
        poster={Ravens}
        posterWebp={RavensWebp}
        posterAvif={RavensAvif}
        title={`Ravens Film Works`}
      />
      <WorkItem
        description={`The Doctors CBD had an existing site, but it was slow and lacked the features they needed in order to sell their products online. We redesigned a new elegant site that has helped them list and sell their products online.`}
        link={`https://www.thedoctorscbdrelief.com/`}
        poster={TheDoctorsCbd}
        posterWebp={TheDoctorsCbdWebp}
        posterAvif={TheDoctorsCbdAvif}
        title={`The Doctors CBD`}
      />
      <WorkItem
        description={`A collaborative effort with the team at Blackthorn Software. Their software helps you run a better business by creating top to bottom visibility for every part of the project by providing a suite of management tools for companies of all sizes to keep track of their team members, projects, and even assets.`}
        link={`https://blackthornsoftware.com/`}
        poster={BlackthornSoftware}
        posterWebp={BlackthornSoftwareWebp}
        posterAvif={BlackthornSoftwareAvif}
        title={`Blackthorn Software`}
      />
    </div>
  </div>
</div>

<div class="bg-gray-200">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
  >
    <h2
      class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10"
    >
      <span class="block">Ready to get started?</span>
      <span class="block text-blue-600">
        Send us a message so we can chat.
      </span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <a
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out"
          href="/contact/"
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
</div>
