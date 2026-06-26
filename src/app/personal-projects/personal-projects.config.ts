import { TocSection } from 'src/shared/table-of-contents/table-of-contents.component';

export interface PersonalProject {
  slug: string;
  title: string;
  icon: string;
  tocSections: TocSection[];
}

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    slug: 'stat-requirement-checklist',
    title: 'OpenRCT2 Stat Checklist',
    icon: 'attractions',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
      { id: 'section-background', label: 'Background', icon: 'info' },
      { id: 'section-plugin-options', label: 'Plugin Options', icon: 'tune' },
      { id: 'section-technologies', label: 'Technologies Used', icon: 'layers' },
      { id: 'section-future-features', label: "What I'd Like to Add Next", icon: 'lightbulb' },
    ],
  },
  {
    slug: 'eink-businesscard',
    title: 'E-Ink Business Card',
    icon: 'memory',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
      { id: 'section-requirements', label: 'Requirements', icon: 'build' },
      { id: 'section-step-1-software', label: 'Step 1: Software Setup', icon: 'code' },
      { id: 'section-step-2-pcb', label: 'Step 2: Custom Circuit Board Printing', icon: 'developer_board' },
    ],
  },
  {
    slug: 'digital-photoframe',
    title: 'Digital Photo Frame',
    icon: 'photo_library',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
      { id: 'section-requirements', label: 'Requirements', icon: 'build' },
      { id: 'section-step-1-os', label: 'Step 1: OS Setup', icon: 'settings' },
      { id: 'section-step-2-software', label: 'Step 2: Software Setup', icon: 'code' },
      { id: 'section-step-3-frame', label: 'Step 3: Build Frame', icon: 'handyman' },
    ],
  },
  {
    slug: 'pi-emulator',
    title: 'Pi Emulator',
    icon: 'computer',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
      { id: 'section-steps-install', label: 'Steps to Install', icon: 'download' },
    ],
  },
  {
    slug: 'japanese-website',
    title: 'Japanese Flashcard Site',
    icon: 'translate',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
      { id: 'section-technologies', label: 'Technologies Used', icon: 'layers' },
      { id: 'section-future-features', label: 'Future Features', icon: 'lightbulb' },
    ],
  },
  {
    slug: 'password-strength',
    title: 'Password Strength Measurer',
    icon: 'lock',
    tocSections: [
      { id: 'section-main', label: 'Main', icon: 'home' },
    ],
  },
];

export function getProjectBySlug(slug: string): PersonalProject | undefined {
  return PERSONAL_PROJECTS.find((project) => project.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return PERSONAL_PROJECTS.findIndex((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string, direction: 'prev' | 'next'): PersonalProject | undefined {
  const index = getProjectIndex(slug);
  if (index === -1) {
    return undefined;
  }
  const nextIndex = direction === 'prev' ? index - 1 : index + 1;
  return PERSONAL_PROJECTS[nextIndex];
}
