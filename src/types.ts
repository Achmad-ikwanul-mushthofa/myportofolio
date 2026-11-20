export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialUrl: string;
};
