<script lang="ts">
	import ContactBanner from '../../components/contact-banner.svelte';
	import WorkItem from '../../components/work-item.svelte';

	// images
	import AcceleratedEquityPlans from '../../images/work/accelerated-equity-plans.jpg?enhanced';
	import Cosgriff from '../../images/work/cosgriff.jpg?enhanced';
	import CrewView from '../../images/work/crewview.jpg?enhanced';
	import DenverWindowWellCovers from '../../images/work/denver-window-well-covers.jpg?enhanced';
	import DKOW from '../../images/work/dkow.jpg?enhanced';
	import Hanks from '../../images/work/hanks-garage-venue.jpg?enhanced';
	import HereKidsWin from '../../images/work/here-kids-win.jpg?enhanced';
	import HeritageOfPreston from '../../images/work/heritage-of-preston.jpg?enhanced';
	import JeremyMiller from '../../images/work/jeremy-miller.jpg?enhanced';
	import JMills from '../../images/work/jmills.jpg?enhanced';
	import KnowYourForce from '../../images/work/know-your-force.jpg?enhanced';
	import NEF from '../../images/work/national-energy-foundation.jpg?enhanced';
	import Ravens from '../../images/work/ravens.jpg?enhanced';
	import TheDoctorsCbd from '../../images/work/the-doctors-cbd.jpg?enhanced';
	import ThermWise from '../../images/work/thermwise.jpg?enhanced';
	import WasatchCovers from '../../images/work/wasatch-covers.jpg?enhanced';

	const seoTitle = 'Web Design & Development Portfolio from Bootpack Digital';
	const seoDescription =
		"We build engaging, custom experiences for our clients. Here's a few examples we're particularly proud of.";
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:url" content="https://bootpackdigital.com/work" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />

	<link rel="canonical" href="https://bootpackdigital.com/work" />
</svelte:head>

<div class="hero-bg relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 bg-white">
	<div class="relative mx-auto max-w-7xl">
		<div>
			<h1
				class="text-3xl font-extrabold leading-9 tracking-tight text-navy-600 sm:text-4xl sm:leading-10"
			>
				Custom Web Design and Development Projects
			</h1>
			<p class="mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">
				We build engaging, custom experiences for our clients. Here's a few examples we're
				particularly proud of.
			</p>
		</div>
		<div class="mx-auto mt-12 grid max-w-lg gap-x-5 gap-y-10 lg:max-w-none lg:grid-cols-3">
			<WorkItem
				description={`Primary Children's Hospital launched a campaign called "Here Kids Win." As part of the campaign they wanted an interactive website to showcase some of the patient stories that have been submitted. We worked with the talented design team at Faktory to build an engaging experience seen by hundreds of thousands.`}
				link={`https://herekidswin.com/`}
				linkText="Visit Here Kids Win"
				poster={HereKidsWin}
				title={`Primary Children's Hospital | Here Kids Win`}
			/>
			<WorkItem
				description="DKOW is a Utah's most trusted name for wrongful death and personal injury law. They needed a site that would help them showcase their expertise and help them connect with potential clients."
				link={`https://www.dkow.com/`}
				linkText="Visit DKOW"
				poster={DKOW}
				title={`DKOW Law`}
			/>
			<WorkItem
				description="National Energy Foundation (NEF) is a non-profit energy education organization that specializes in K-gray education. They needed a new website that represent their brand better and showcase their programs and reach. We designed and built a site that is easy to use and easy to update."
				link={`https://nef1.org/`}
				linkText="Visit NEF"
				poster={NEF}
				title={`National Energy Foundation`}
			/>
			<WorkItem
				description="Wasatch Covers was tired of their WordPress site's performance so we rebuilt the thing using modern technologies. The site now loads in a snap, check it out for yourself. Conversion rates are dramatically up now that customers aren't waiting seconds for a single page to load."
				link={`https://wasatchcovers.com/`}
				linkText="Visit Wasatch Covers"
				poster={WasatchCovers}
				title={`Wasatch Covers`}
			/>
			<WorkItem
				description="JME FILM CO had an outdated website that didn't represent their brand. We partnered with their design team to create a beautiful and engaging experience that more reflected who they are. The site is built to allow infinite customization from the CMS and still provide excellent performance on the front-end."
				link={`https://www.jmillsent.com/`}
				linkText="Visit JME Film Co"
				poster={JMills}
				title={`JME Film Co`}
			/>
			<WorkItem
				description="Accelerated Equity Plans is a new business looking to establish their brand in a competitive financial services industry. We designed and developed a site for them that helps them stand out from their competition. The bring industry leading expertise and support to your their clients' programs to deliver a best-in-class experience for your team, partners and participants."
				link="https://www.acceleratedep.com"
				linkText="Visit AEP"
				poster={AcceleratedEquityPlans}
				title="Accelerated Equity Plans"
			/>
			<WorkItem
				description="A collaborative effort with the team at Blackthorn Software. Their CrewView software helps you run a better business by creating top to bottom visibility for every part of the project by providing a suite of management tools for companies of all sizes to keep track of their team members, projects, and even assets."
				link={`https://www.crewview.com/`}
				linkText={`Visit CrewView`}
				poster={CrewView}
				title={`CrewView`}
				lazy={true}
			/>
			<WorkItem
				description="Know Your Force (KYF) is rethinking the way police and communities communicate. QR codes are generated for each employee and can be printed anywhere. The end user scans the QR code, and leaves a review for the representative. We built the platform from the ground up using serverless technology to help the platform scale infinitely. "
				link={`https://knowyourforce.com/`}
				linkText="Visit KYF"
				poster={KnowYourForce}
				title={`Know Your Force`}
				lazy={true}
			/>
			<WorkItem
				description="A collaborative effort with the team at Dominion Energy and Faktory. The ThermWise program website aids homeowners and businesses in saving money and conserving energy."
				link={`https://www.thermwise.com/`}
				linkText="Visit ThermWise"
				poster={ThermWise}
				title={`ThermWise`}
				lazy={true}
			/>
			<WorkItem
				description="Heritage Senior Living in Preston, ID reached out to revamp their outdated website. We rebuilt it to help customers find what they're looking for. The new site highlights the facility with lots of photos."
				link={`https://www.heritageofpreston.com/`}
				linkText="Visit Heritage Senior Living"
				poster={HeritageOfPreston}
				title={`Heritage Senior Living`}
				lazy={true}
			/>
			<WorkItem
				description="Denver Window Well Covers was a ground up build to service the semi-custom needs of Colorado residents. Denver Window Well Covers offers a quality product at the lowest prices on window well covers in Colorado and Denver areas."
				link={`https://denverwindowwellcovers.com/`}
				linkText="Visit Denver Window Well Covers"
				poster={DenverWindowWellCovers}
				title={`Denver Window Well Covers`}
				lazy={true}
			/>
			<WorkItem
				description="Jeremy Miller is an award-winning film director based in Salt Lake City, Utah. He wanted a new site that put the focus on the work, so we built him a site that did exactly that in a stylistic way. Be sure to check out the custom Vimeo player on the individual work page; we're pretty proud of that one."
				link={`https://jeremymillerdirector.com/`}
				linkText="Visit Jeremy Miller's Site"
				poster={JeremyMiller}
				title={`Director Jeremy Miller`}
				lazy={true}
			/>
			<WorkItem
				description="The Cosgriff school used a site we built about 10 years ago. Needless to say it was time for a fresh coat of paint and a rethink of how the pages were organized. We rebuilt the site from the ground up in ~4 weeks. After comparing analytics the new site clearly outperforms the old site in nearly every measurable way."
				link={`https://cosgriff.org/`}
				linkText="Visit Cosgriff School"
				poster={Cosgriff}
				title={`J.E. Cosgriff School`}
				lazy={true}
			/>
			<WorkItem
				description="As skilled technicians with a unique sensibility for storytelling, RAVENS are poised to execute nearly any mission from heavy lift aerials to pursuit tracking or technical phantom flex high speed work."
				link={`https://ravensfilmworks.com/`}
				linkText="Visit Ravens Film Works"
				poster={Ravens}
				title={`Ravens Film Works`}
				lazy={true}
			/>
			<WorkItem
				description="A rad event space in North Salt Lake. Dance, dine, and have fun amongst some of the greatest road machines ever conceived or built."
				link={`https://www.hanksgaragevenue.com/`}
				linkText="Visit Hanks Garage Venue"
				poster={Hanks}
				title={`Hanks Garage Venue`}
				lazy={true}
			/>
			<WorkItem
				description="The Doctors CBD had an existing site, but it was slow and lacked the features they needed in order to sell their products online. We redesigned a new elegant site that has helped them list and sell their products online."
				link={`https://thedoctorscbdrelief.com/`}
				linkText="Visit The Doctors CBD"
				poster={TheDoctorsCbd}
				title={`The Doctors CBD`}
				lazy={true}
			/>
		</div>
	</div>
</div>

<ContactBanner
	textLine1="Ready to get started?"
	textLine2="Send us a message so we can chat."
	bgColor="bg-navy-100"
/>
