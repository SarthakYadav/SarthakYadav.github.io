import { profile, updates, publications, projects } from './data/siteData';

function linkTarget(url) {
  return url.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' };
}

function LinkRow({ links }) {
  return (
    <div className="link-row">
      {links.map((link) => (
        <a key={link.label} className="pill-link" href={link.url} {...linkTarget(link.url)}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function InlineLinks({ links }) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <span>
      {' '}
      {links.map((link, index) => (
        <span key={link.label}>
          {index > 0 ? ' / ' : ''}
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </span>
      ))}
    </span>
  );
}

function PublicationCard({ publication }) {
  const imageStyle = {
    objectFit: publication.imageFit ?? 'cover',
    aspectRatio: publication.imageAspect ?? '1 / 1',
  };

  return (
    <article className="content-card publication-card">
      <img src={publication.image} alt={publication.title} loading="lazy" style={imageStyle} />
      <div>
        <h3>{publication.title}</h3>
        <p className="meta">
          {publication.authors}
          <br />
          <span>
            {publication.venue} · {publication.year}
          </span>
        </p>
        <LinkRow links={publication.links} />
        <details>
          <summary>Abstract</summary>
          <p>{publication.abstract}</p>
        </details>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="content-card project-card">
      {project.image ? <img src={project.image} alt={project.title} loading="lazy" /> : null}
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <LinkRow links={project.links} />
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="site-shell">
        <nav className="top-nav">
          <a href="#about">About</a>
          <a href="#updates">Updates</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
        </nav>

        <header id="about" className="hero section">
          <div>
            <p className="eyebrow">Personal Site</p>
            <h1>{profile.name}</h1>
            <p className="headline">{profile.role}</p>

            <div className="affiliations">
              {profile.affiliations.map((affiliation) => (
                <a key={affiliation.label} href={affiliation.url} target="_blank" rel="noreferrer">
                  {affiliation.label}
                </a>
              ))}
            </div>

            {profile.about.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}

            <LinkRow links={profile.links} />
          </div>

          <aside className="portrait-wrap">
            <img className="portrait" src={profile.avatar} alt="Sarthak Yadav" />
          </aside>
        </header>

        <section id="updates" className="section">
          <div className="section-heading">
            <p className="eyebrow">Recent</p>
            <h2>Updates</h2>
          </div>
          <div className="content-card updates-card">
            <ul>
              {updates.map((update) => (
                <li key={`${update.date}-${update.text}`}>
                  <span>{update.date}</span>
                  <p>
                    {update.text}
                    <InlineLinks links={update.links} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="publications" className="section">
          <div className="section-heading">
            <p className="eyebrow">Research</p>
            <h2>Selected Publications</h2>
          </div>
          <div className="stack">
            {publications.map((publication) => (
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Code</p>
            <h2>Projects and Open Source</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>
            Built with React + Vite. Original template credits: <a href="https://jonbarron.info/" target="_blank" rel="noreferrer">Dr. Jon Barron</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}
