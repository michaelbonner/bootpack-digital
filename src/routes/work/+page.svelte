<script lang="ts">
	import { resolve } from '$app/paths';
	import ContactBanner from '../../components/contact-banner.svelte';
	import Seo from '../../components/seo.svelte';
	import TopoHeroBg from '../../components/topo-hero-bg.svelte';
	import WorkItem from '../../components/work-item.svelte';
	// images
	import AcceleratedEquityPlans from '../../images/work/accelerated-equity-plans.jpg?w=320;480;640;800;960;1200&enhanced';
	import Cosgriff from '../../images/work/cosgriff.jpg?w=320;480;640;800;960;1200&enhanced';
	import CrewView from '../../images/work/crewview.jpg?w=320;480;640;800;960;1200&enhanced';
	import DenverWindowWellCovers from '../../images/work/denver-window-well-covers.jpg?w=320;480;640;800;960;1200&enhanced';
	import DKOW from '../../images/work/dkow.jpg?w=320;480;640;800;960;1200&enhanced';
	import EasyCustomerFeedback from '../../images/easycustomerfeedback-screenshots/homepage-hero.jpg?w=320;480;640;800;960;1200&enhanced';
	import ESK from '../../images/work/energy-safe-kids.jpg?w=320;480;640;800;960;1200&enhanced';
	import Hanks from '../../images/work/hanks-garage-venue.jpg?w=320;480;640;800;960;1200&enhanced';
	import HereKidsWin from '../../images/work/here-kids-win.jpg?w=320;480;640;800;960;1200&enhanced';
	import HeritageOfPreston from '../../images/work/heritage-of-preston.jpg?w=320;480;640;800;960;1200&enhanced';
	import JeremyMiller from '../../images/work/jeremy-miller.jpg?w=320;480;640;800;960;1200&enhanced';
	import JMills from '../../images/work/jmills.jpg?w=320;480;640;800;960;1200&enhanced';
	import JobListing from '../../images/joblisting-app-screenshots/homepage.jpg?w=320;480;640;800;960;1200&enhanced';
	import KnowYourForce from '../../images/work/know-your-force.jpg?w=320;480;640;800;960;1200&enhanced';
	import NEF from '../../images/work/national-energy-foundation.jpg?w=320;480;640;800;960;1200&enhanced';
	import Ravens from '../../images/work/ravens.jpg?w=320;480;640;800;960;1200&enhanced';
	import TheDoctorsCbd from '../../images/work/the-doctors-cbd.jpg?w=320;480;640;800;960;1200&enhanced';
	import ThermWise from '../../images/work/thermwise.jpg?w=320;480;640;800;960;1200&enhanced';
	import WasatchCovers from '../../images/work/wasatch-covers.jpg?w=320;480;640;800;960;1200&enhanced';
	import UtahMountainAdventures from '../../images/work/utah-mountain-adventures.jpg?w=320;480;640;800;960;1200&enhanced';
	import WasatchFabrication from '../../images/work/wasatch-fabrication.jpg?w=320;480;640;800;960;1200&enhanced';
</script>

<Seo
	title="Web Design & Development Portfolio from Bootpack Digital"
	description="Explore websites, mobile apps, and custom software designed and developed by Bootpack Digital."
	canonical="/work"
	ogImage="/og-work.jpg"
	ogImageAlt="Bootpack Digital web design and development portfolio"
/>


<section class="overflow-hidden relative bg-blue-50">
	<TopoHeroBg />
	<div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 md:py-24 lg:px-8 lg:py-28">
		<div class="grid gap-8 items-end lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-20">
			<div>
				<p class="mb-5 text-sm font-bold tracking-[0.18em] text-orange-700 uppercase">
					Selected work
				</p>
				<h1
					class="max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.04] text-navy-700 sm:text-5xl lg:text-6xl xl:text-7xl"
				>
					Websites and software built to pull their weight.
				</h1>
			</div>
			<div class="pb-1">
				<p class="max-w-xl text-lg leading-8 text-navy-600">
					From public campaigns seen by hundreds of thousands to custom tools that replace
					spreadsheets and inboxes, we build useful digital products for the real world.
				</p>
				<a
					class="inline-flex items-center mt-6 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-600"
					href={resolve('/blog/how-we-work-with-you')}
				>
					See how we run projects
					<svg aria-hidden="true" class="ml-2 size-4" fill="none" viewBox="0 0 20 20">
						<path
							d="m7 4 6 6-6 6"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="px-4 py-16 bg-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-6 items-end mb-12 md:grid-cols-[1fr_auto] md:mb-16">
			<div>
				<p class="text-sm font-bold tracking-[0.16em] text-orange-700 uppercase">The work</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
					A few projects we are proud to put our name on
				</h2>
			</div>
			<p class="max-w-md text-base leading-7 text-gray-600 md:text-right">
				Strategy, design, development, and long-term partnership, shaped around what each client
				actually needs.
			</p>
		</div>

		<div class="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-20 xl:grid-cols-3">
			<WorkItem
				description="Primary Children's Hospital launched a campaign called &quot;Here Kids Win.&quot; As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted. We worked with the talented design team at Faktory to build an engaging experience seen by hundreds of thousands."
				featured={true}
				link="https://herekidswin.com/"
				linkText="Visit Here Kids Win"
				poster={HereKidsWin}
				title="Primary Children's Hospital | Here Kids Win"
			/>
			<WorkItem
				description="The premier guiding service based in Utah, offering expert-led courses and trips in backcountry skiing, splitboarding, rock climbing, ice climbing, mountaineering, canyoneering, and avalanche education. With a team of highly experienced guides, UMA helps people of all skill levels explore Utah's mountains, providing both group courses and custom private adventures."
				link="https://www.utahmountainadventures.com/"
				linkText="Visit UMA"
				poster={UtahMountainAdventures}
				title="Utah Mountain Adventures"
			/>
			<WorkItem
				description="An interactive educational platform created by the National Energy Foundation (NEF) to teach students and teachers about energy safety. The program is offered by NEF and their sponsoring partners across the country. The site is adaptable for each sponsor and their specific materials, videos, and branding."
				link="https://energysafekids.org/"
				linkText="Visit ESK"
				poster={ESK}
				title="Energy Safe Kids"
				caseStudyLink="/case-studies/energy-safe-kids"
			/>
			<WorkItem
				description="A Bootpack Digital product that gives small teams a practical hiring workflow without a bloated ATS. Publish branded job listings or embed openings in your own site, build custom application forms for each role, and manage candidates, notes, interviews, and analytics from a single dashboard."
				link="https://joblisting.app/"
				linkText="Visit JobListing"
				poster={JobListing}
				title="JobListing.app"
			/>
			<WorkItem
				description="A leading Utah law firm specializing in catastrophic injury and wrongful death cases. With a proven track record of record-breaking verdicts and settlements, DKOW's experienced trial attorneys provide compassionate, results-driven representation for clients across a wide range of personal injury matters."
				link="https://www.dkow.com/"
				linkText="Visit DKOW"
				poster={DKOW}
				title="DKOW Law"
			/>
			<WorkItem
				description="Wasatch Fabrication provides custom steel fabrication, laser cutting, welding, and powder coating for commercial, industrial, and custom projects. They needed a website to show their services and collect requests for quotes. We also built out an admin portal for them to manage their projects and quotes using Stripe for payments."
				link="https://wasatchfabrication.com/"
				linkText="Visit Wasatch Fabrication"
				poster={WasatchFabrication}
				title="Wasatch Fabrication"
				caseStudyLink="/case-studies/wasatch-fabrication"
			/>
			<WorkItem
				description="A non-profit energy education organization that specializes in K-gray education. They needed a new website that represents their brand better and showcase their programs and reach. We designed and built a site that is easy to use and easy to update."
				link="https://nef1.org/"
				linkText="Visit NEF"
				poster={NEF}
				title="National Energy Foundation"
			/>
			<WorkItem
				description="A Bootpack Digital service that makes it simple to collect, organize, and act on customer feedback. Custom feedback boards, embeddable widgets, and integrations with the tools your team already uses to deliver reviews and feature requests right into your workflow."
				link="https://easycustomerfeedback.com/"
				linkText="Visit EasyCustomerFeedback"
				poster={EasyCustomerFeedback}
				title="EasyCustomerFeedback"
			/>
			<WorkItem
				description="They were tired of their WordPress site's performance so we rebuilt the thing using modern technologies. The site now loads in a snap. Check it out for yourself. Conversion rates are dramatically up now that customers aren't waiting seconds for a single page to load."
				link="https://wasatchcovers.com/"
				linkText="Visit Wasatch Covers"
				poster={WasatchCovers}
				title="Wasatch Covers"
			/>
			<WorkItem
				description="They had an outdated website that didn't represent their brand. We partnered with their design team to create a beautiful and engaging experience that more reflected who they are. The site is built to allow infinite customization from the CMS and still provide excellent performance on the front-end."
				link="https://www.jmillsent.com/"
				linkText="Visit JME Film Co"
				poster={JMills}
				title="JME Film Co"
			/>
			<WorkItem
				description="A new business looking to establish their brand in a competitive financial services industry. We designed and developed a site for them that helps them stand out from their competition. They bring industry-leading expertise and support to their clients' programs, delivering a best-in-class experience for their clients' teams, partners, and participants."
				link="https://www.acceleratedep.com"
				linkText="Visit AEP"
				poster={AcceleratedEquityPlans}
				title="Accelerated Equity Plans"
			/>
			<WorkItem
				description="A collaborative effort with the team at Blackthorn Software. Their CrewView software helps you run a better business by creating top to bottom visibility for every part of the project by providing a suite of management tools for companies of all sizes to keep track of their team members, projects, and even assets."
				link="https://www.crewview.com/"
				linkText="Visit CrewView"
				poster={CrewView}
				title="CrewView"
				lazy={true}
			/>
			<WorkItem
				description="Rethinking the way police and communities communicate. QR codes are generated for each employee and can be printed anywhere. The end user scans the QR code and leaves a review for the representative. We built the platform from the ground up using serverless technology to help the platform scale infinitely."
				link="https://knowyourforce.com/"
				linkText="Visit KYF"
				poster={KnowYourForce}
				title="Know Your Force"
				lazy={true}
			/>
			<WorkItem
				description="A collaborative effort with the team at Dominion Energy and Faktory. The ThermWise program website aids homeowners and businesses in saving money and conserving energy."
				link="https://www.thermwise.com/"
				linkText="Visit ThermWise"
				poster={ThermWise}
				title="ThermWise"
				lazy={true}
			/>
			<WorkItem
				description="They needed a new website and reached out to revamp their outdated website. We rebuilt it to help customers find what they're looking for. The new site highlights the facility with lots of photos."
				link="https://www.heritageofpreston.com/"
				linkText="Visit Heritage Senior Living"
				poster={HeritageOfPreston}
				title="Heritage Senior Living"
				lazy={true}
			/>
			<WorkItem
				description="A ground up build to service the semi-custom needs of Colorado residents. Denver Window Well Covers offers a quality product at the lowest prices on window well covers in Colorado and Denver areas."
				link="https://denverwindowwellcovers.com/"
				linkText="Visit Denver Window Well Covers"
				poster={DenverWindowWellCovers}
				title="Denver Window Well Covers"
				lazy={true}
			/>
			<WorkItem
				description="Jeremy Miller is an award-winning film director based in Salt Lake City, Utah. He wanted a new site that put the focus on the work, so we built him a site that did exactly that in a stylistic way. Be sure to check out the custom Vimeo player on the individual work page; we're pretty proud of that one."
				link="https://jeremymillerdirector.com/"
				linkText="Visit Jeremy Miller's Site"
				poster={JeremyMiller}
				title="Director Jeremy Miller"
				lazy={true}
			/>
			<WorkItem
				description="The Cosgriff school used a site we built about 10 years ago. Needless to say it was time for a fresh coat of paint and a rethink of how the pages were organized. We rebuilt the site from the ground up in ~4 weeks. After comparing analytics the new site clearly outperforms the old site in nearly every measurable way."
				link="https://cosgriff.org/"
				linkText="Visit Cosgriff School"
				poster={Cosgriff}
				title="J.E. Cosgriff School"
				lazy={true}
			/>
			<WorkItem
				description="As skilled technicians with a unique sensibility for storytelling, RAVENS are poised to execute nearly any mission from heavy lift aerials to pursuit tracking or technical phantom flex high speed work."
				link="https://ravensfilmworks.com/"
				linkText="Visit Ravens Film Works"
				poster={Ravens}
				title="Ravens Film Works"
				lazy={true}
			/>
			<WorkItem
				description="A rad event space in North Salt Lake. Dance, dine, and have fun amongst some of the greatest road machines ever conceived or built."
				link="https://www.hanksgaragevenue.com/"
				linkText="Visit Hanks Garage Venue"
				poster={Hanks}
				title="Hanks Garage Venue"
				lazy={true}
			/>
			<WorkItem
				description="The Doctors CBD had an existing site, but it was slow and lacked the features they needed in order to sell their products online. We redesigned a new elegant site that has helped them list and sell their products online."
				link="https://thedoctorscbdrelief.com/"
				linkText="Visit The Doctors CBD"
				poster={TheDoctorsCbd}
				title="The Doctors CBD"
				lazy={true}
			/>
		</div>
	</div>
</section>

<ContactBanner
	textLine1="Have a project that needs to work harder?"
	textLine2="Tell us where you want to take it."
	bgColor="bg-navy-100"
/>
