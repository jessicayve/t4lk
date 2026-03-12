import React from "react"
import {
  HomePageWrapper,
  HeroSection,
  HeroContent,
  HeroLeft,
  HeroRight,
  HeroEyebrow,
  HeroTitle,
  HeroText,
  HeroActions,
  PrimaryAction,
  SecondaryAction,
  ActivityCard,
  ActivityHeader,
  ActivityKpi,
  ActivityChart,
  ActivityColumn,
  ActivityBar,
  ActivityLabel,
  ActivityLegend,
  SectionCard,
  SectionHeader,
  FeedwallList,
  FeedwallItem,
  FeedwallMeta,
  TeamGrid,
  TeamMemberCard,
  TeamMemberAvatar,
  TeamMemberInfo,
  StatusDot,
  DayImageCard,
  DayImageFrame,
  ProgressLayout,
  ProgressCard,
  ProgressTop,
  ProgressBarTrack,
  ProgressBarFill,
  ProgressMeta,
  ShortcutPanel,
  ShortcutLink,
  HealthGrid,
  HealthItem,
  HealthDot
} from "./HomePageStyled"
import { MessageCircleHeart } from "lucide-react"

const weeklyActivity = [
  { day: "Mon", value: 52 },
  { day: "Tue", value: 68 },
  { day: "Wed", value: 44 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 36 },
  { day: "Sun", value: 58 }
]

const feedwallPosts = [
  {
    author: "Emma Rodriguez",
    role: "Engineering Manager",
    message:
      "Excellent sprint energy this week. The team kept communication clear, reviews moving and delivery quality high.",
    tag: "Leadership note"
  },
  {
    author: "Lester Crester",
    role: "Backend Developer",
    message:
      "Huge shout-out to the frontend work on the new workspace flow. The interface feels much more polished and easier to navigate.",
    tag: "Team praise"
  },
  {
    author: "Maya Brooks",
    role: "Product Designer",
    message:
      "Keep building with care. Small interface decisions are making T4LK feel like a real product, not just a project.",
    tag: "Motivation"
  },
]

const teamMembers = [
  {
    name: "Jessica",
    role: "Frontend Developer",
    focus: "Building workspace UI",
    status: "online",
    avatar: "https://i.pravatar.cc/120?img=32"
  },
  {
    name: "Lester",
    role: "Backend Developer",
    focus: "API improvements",
    status: "online",
    avatar: "https://i.pravatar.cc/120?img=12"
  },
  {
    name: "Maya",
    role: "UI Designer",
    focus: "Design system polish",
    status: "focus",
    avatar: "https://i.pravatar.cc/120?img=44"
  },
  {
    name: "Noah",
    role: "QA Engineer",
    focus: "Testing sprint flows",
    status: "away",
    avatar: "https://i.pravatar.cc/120?img=17"
  },
    {
    name: "Lucas",
    role: "DevOps Engineer",
    focus: "CI/CD pipelines",
    status: "online",
    avatar: "https://i.pravatar.cc/120?img=8"
  },
  {
    name: "Anna",
    role: "Product Manager",
    focus: "Sprint planning",
    status: "focus",
    avatar: "https://i.pravatar.cc/120?img=47"
  }
]

const projectHealth = [
  { label: "Build Status", value: "Passing", tone: "success" },
  { label: "Deploy", value: "Production Live", tone: "success" },
  { label: "Open PRs", value: "3 waiting review", tone: "warning" },
  { label: "Blocked Tasks", value: "2 blockers", tone: "danger" }
]

const imageOfTheDay =
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
const HomePage = () => {
  return (
    <HomePageWrapper>
      <HeroSection>
        <HeroContent>
          <HeroLeft>
            <HeroEyebrow>Internal Workspace Home</HeroEyebrow>

            <HeroTitle>
              T4LK gives small dev teams one place to share.
            </HeroTitle>

            <HeroText>
              A modern collaboration hub designed for developers. T4LK brings together
              team chat, sprint flow, pull requests, notes, standups, deploy visibility
              and planning in one focused product experience.
            </HeroText>

            <HeroActions>
              <PrimaryAction to="/chat">Open Team Chat</PrimaryAction>
              <SecondaryAction to="/tasks">View Sprint Board</SecondaryAction>
            </HeroActions>
          </HeroLeft>

          <HeroRight>
            <ActivityCard>
              <ActivityHeader>
                <div>
                  <span>Last 7 days</span>
                  <h3>Workspace activity</h3>
                </div>

                <ActivityKpi>
                  <strong>410</strong>
                  <small>Total interactions</small>
                </ActivityKpi>
              </ActivityHeader>

              <ActivityChart>
                {weeklyActivity.map((item) => (
                  <ActivityColumn key={item.day}>
                    <ActivityBar style={{ height: `${item.value}%` }} />
                    <ActivityLabel>{item.day}</ActivityLabel>
                  </ActivityColumn>
                ))}
              </ActivityChart>

              <ActivityLegend>
                <span>Messages</span>
                <span>Task updates</span>
                <span>PR movement</span>
              </ActivityLegend>
            </ActivityCard>
          </HeroRight>
        </HeroContent>
      </HeroSection>

      <SectionCard>
        <SectionHeader>
          <div>
            <h2>Feedwall  <MessageCircleHeart size={20} strokeWidth={2} /> </h2>
            <p>
              A shared space for praise, leadership notes and motivational messages
              inside the workspace.
            </p>
          </div>
        </SectionHeader>

        <FeedwallList>
          {feedwallPosts.map((post) => (
            <FeedwallItem key={`${post.author}-${post.tag}`}>
              <FeedwallMeta>
                <span>{post.tag}</span>
                <strong>{post.author}</strong>
                <small>{post.role}</small>
              </FeedwallMeta>

              <p>{post.message}</p>
            </FeedwallItem>
          ))}
        </FeedwallList>
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <div>
            <h2>Team presence</h2>
            <p>
              A cleaner view of active team members plus a visual highlight for the day.
            </p>
          </div>
        </SectionHeader>

        <ProgressLayout>
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name}>
                <TeamMemberAvatar>
                  <img src={member.avatar} alt={member.name} />
                  <StatusDot status={member.status} />
                </TeamMemberAvatar>

                <TeamMemberInfo>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                  <p>{member.focus}</p>
                </TeamMemberInfo>
              </TeamMemberCard>
            ))}
          </TeamGrid>

          <DayImageCard>
            <span>Image of the day</span>
            <h3>Visual inspiration for the workspace</h3>
            <p>
              Use this space to highlight a cool image, creative reference or team mood
              visual for the day.
            </p>

            <DayImageFrame>
              <img src={imageOfTheDay} alt="Image of the day" />
            </DayImageFrame>
          </DayImageCard>
        </ProgressLayout>
      </SectionCard>

      <ProgressLayout>
        <SectionCard>
          <SectionHeader>
            <div>
              <h2>Sprint progress</h2>
              <p>A structured sprint area with metrics and current delivery pace.</p>
            </div>
          </SectionHeader>

          <ProgressCard>
            <ProgressTop>
              <div>
                <span>Current sprint</span>
                <h3>Sprint 07 — Workspace Expansion</h3>
              </div>

              <strong>68%</strong>
            </ProgressTop>

            <ProgressBarTrack>
              <ProgressBarFill style={{ width: "68%" }} />
            </ProgressBarTrack>

            <ProgressMeta>
              <div>
                <strong>24</strong>
                <span>Completed</span>
              </div>

              <div>
                <strong>8</strong>
                <span>In progress</span>
              </div>

              <div>
                <strong>3</strong>
                <span>In review</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Blocked</span>
              </div>
            </ProgressMeta>
          </ProgressCard>
        </SectionCard>

        <ShortcutPanel>
          <ShortcutLink to="/tasks">Open Tasks Board</ShortcutLink>
          <ShortcutLink to="/pull-requests">Review Pull Requests</ShortcutLink>
          <ShortcutLink to="/standup">Start Standup</ShortcutLink>
          <ShortcutLink to="/calendar">Open Calendar</ShortcutLink>
        </ShortcutPanel>
      </ProgressLayout>

      <SectionCard>
        <SectionHeader>
          <div>
            <h2>Project health</h2>
            <p>Key delivery signals for builds, deploys, reviews and blockers.</p>
          </div>
        </SectionHeader>

        <HealthGrid>
          {projectHealth.map((item) => (
            <HealthItem key={item.label}>
              <div>
                <HealthDot tone={item.tone} />
                <span>{item.label}</span>
              </div>

              <strong>{item.value}</strong>
            </HealthItem>
          ))}
        </HealthGrid>
      </SectionCard>
    </HomePageWrapper>
  )
}

export default HomePage