#!/usr/bin/env node

const verbs = `aggregate administrate accelerate architect benchmark brand build bully cluster create coordinate consolidate compete conquer 
    customize cultivate deliver deploy develop disintermediate disseminate differentiate drive e-enable embrace empower enable engage engineer 
    enhance entrench envisioneer establish evolve expedite exploit extend facilitate fashion foster generate grow harness harvest improve implement
    incentivize incubate industrialize innovate introduce integrate initiate iterate lead leverage network negotiate market maintain maximize mesh 
    monetize morph optimize orchestrate participate pursue promote reintermediate reinvent repurpose restore revolutionize scale seize strategize 
    streamline supply syndicate synergize synthesize target transform transition unleash utilize visualize 
`.trim().split(/\s+/);

const adverbs = `adaptively authoritatively administratively advantageously ambassadorially apprehensively appropriately assertively augmentatively 
    autoschediastically biannually carefully centrally challengingly collaboratively confidentially conveniently competently completely continuously 
    continually dramatically dynamically enthusiastically evangelistically efficiently elementarily economically enormously greatly globally heterogeneously 
    interactively paradigmatically preemptively proactively professionally quickly revolutionarily seamlessly simultaneously synergistically vitalistically 
    widespreadedly )]; my $adjectives = [ qw( 24/365 24/7 advanced attention-grabbing B2B B2C back-end best-of-breed bleeding-edge bricks-and-clicks clicks-and-mortar c
    ollaborative compelling corporate cross-platform cross-media customized cutting-edge distributed dot-com dynamic efficient eye-catching eigth-generation 
    error-free edge-of-your-seat end-to-end enterprise enterprise-class eligible exceptional extensible essential fourth-generation fifth-generation fine-grained 
    frictionless front-end global granular guinine holistic high-yield high-end impactful innovative integrated interactive interdependent intuitive internet 
    industry-wide killer leading-edge low-risk magnetic market-driven mission-critical next-generation network one-to-one open-source out-of-the-box plug-and-play 
    performance-oriented principle-centered proactive professional prospective real-time revolutionary robust scalable seamless six-generation second-generation 
    sexy slick sticky strategic synergistic third-generation transparent total turn-key ubiquitous unique user-centric value-added vertical viral virtual 
    visionary web-enabled wireless world-class
`.trim().split(/\s+/);

const nouns = `action-items applications appliances architectures bandwidth channels communities content convergence customers data deliverables developments 
    e-business e-commerce e-markets e-services e-tailers environments experiences eyeballs features functionalities infomediaries information infrastructures
    initiatives interfaces markets m-commerce CEOs IPOs clusters designs market-growth materials methodologies metrics meta-services mindshares models networks 
    niches paradigms partnerships patterns platforms products portals relationships ROI synergies segments schemas services solutions supply-chains systems
    technologies users web-readiness design-patterns 
`.trim().split(/\s+/);

const rnd = (list) => {
    return list[
        parseInt(Math.random() * list.length) - 1
    ];
}

const bollocks = (n) => {
    let bollox = '';
    for (let i = 0; i < n; i++) {
        bollox +=
            rnd(adverbs) + ' ' +
            rnd(verbs) + ' ' +
            rnd(nouns) + '. ';
    }
    return bollox;
};

const report = (n = 1) => {
    process.stdout.write(bollocks(n));
}

module.exports.default = report;
module.exports.report = report;
module.exports.bollocks = bollocks;

console.log(verbs);