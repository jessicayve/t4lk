import React, { useMemo, useState } from "react"
import styled from "styled-components"
import {
  PageShell,
  HeroCard,
  Badge
} from "../../components/WorkspaceUI/WorkspaceUIStyle"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const eventData = {
  "2026-03-16": [
    { title: "Sprint Planning", time: "09:00 AM", type: "planning" }
  ],
  "2026-03-17": [
    { title: "Design Review", time: "02:00 PM", type: "review" }
  ],
  "2026-03-19": [
    { title: "Release Candidate Check", time: "11:00 AM", type: "release" }
  ],
  "2026-03-20": [
    { title: "Dashboard MVP Deadline", time: "05:00 PM", type: "deadline" }
  ],
  "2026-03-24": [
    { title: "Standup Alignment", time: "10:00 AM", type: "planning" }
  ],
  "2026-03-27": [
    { title: "Internal Demo", time: "04:30 PM", type: "review" }
  ]
}

const planningVisibility = {
  title: "Planning visibility",
  description:
    "Track the month at a glance, highlight key ceremonies and keep planning references visible for the full team.",
  image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80"

}

const formatKey = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const getCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  const startOffset = (firstDay.getDay() + 6) % 7
  const daysInMonth = lastDay.getDate()

  const days = []

  for (let i = 0; i < startOffset; i++) {
    days.push(null)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day))
  }

  while (days.length % 7 !== 0) {
    days.push(null)
  }

  return days
}

const getEventTone = (type) => {
  if (type === "planning") return "planning"
  if (type === "review") return "review"
  if (type === "release") return "release"
  return "deadline"
}

const CalendarPage = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1))
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 16))

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()

  const days = useMemo(() => getCalendarDays(year, month), [year, month])

  const selectedKey = formatKey(selectedDate)
  const selectedEvents = eventData[selectedKey] || []

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  return (
    <PageShell>
      <HeroCard>
        <h1>Team Calendar</h1>
        <p>
          Keep meetings, ceremonies, releases and deadlines visible for the full team.
        </p>
      </HeroCard>

      <CalendarLayout>
        <CalendarWidget>
          <CalendarHeader>
            <div>
              <Badge>Planning visibility</Badge>
              <h2>
                {monthNames[month]} {year}
              </h2>
              <p>Monthly team schedule with event highlights and date focus.</p>
            </div>

            <CalendarNav>
              <NavButton onClick={previousMonth} aria-label="Previous month">
                ←
              </NavButton>
              <NavButton onClick={nextMonth} aria-label="Next month">
                →
              </NavButton>
            </CalendarNav>
          </CalendarHeader>

          <WeekHeader>
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </WeekHeader>

          <MonthGrid>
            {days.map((date, index) => {
              if (!date) {
                return <EmptyCell key={`empty-${index}`} />
              }

              const dateKey = formatKey(date)
              const isToday = formatKey(date) === formatKey(today)
              const isSelected = dateKey === selectedKey
              const hasEvents = Boolean(eventData[dateKey]?.length)
              const tone = hasEvents ? getEventTone(eventData[dateKey][0].type) : "default"

              return (
                <DayCell
                  key={dateKey}
                  $isToday={isToday}
                  $isSelected={isSelected}
                  $tone={tone}
                  onClick={() => setSelectedDate(date)}
                >
                  <DayNumber>{date.getDate()}</DayNumber>

                  {hasEvents && (
                    <DayMarkers>
                      {eventData[dateKey].slice(0, 3).map((event, markerIndex) => (
                        <Marker
                          key={`${dateKey}-${markerIndex}`}
                          $tone={getEventTone(event.type)}
                        />
                      ))}
                    </DayMarkers>
                  )}
                </DayCell>
              )
            })}
          </MonthGrid>
        </CalendarWidget>

        <SidePanel>
          <NotesCard>
            <Badge>Calendar notes</Badge>
            <h3 style={{ marginTop: "14px" }}>{planningVisibility.title}</h3>
            <p>{planningVisibility.description}</p>

            <PreviewFrame>
              {planningVisibility.image ? (
                <img
                  src={planningVisibility.image}
                  alt="Planning visibility preview"
                />
              ) : (
                <span>Add a planning image here.</span>
              )}
            </PreviewFrame>
          </NotesCard>

          <EventsCard>
            <Badge>Selected day</Badge>
            <SelectedDateTitle>
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </SelectedDateTitle>

            {selectedEvents.length > 0 ? (
              <EventList>
                {selectedEvents.map((event) => (
                  <EventItem key={`${event.title}-${event.time}`}>
                    <EventDot $tone={getEventTone(event.type)} />
                    <div>
                      <strong>{event.title}</strong>
                      <span>{event.time}</span>
                    </div>
                  </EventItem>
                ))}
              </EventList>
            ) : (
              <EmptyEvents>
                No events for this date yet. You can use this area later for planning
                notes, reminders or release markers.
              </EmptyEvents>
            )}
          </EventsCard>
        </SidePanel>
      </CalendarLayout>
    </PageShell>
  )
}

export default CalendarPage

const CalendarLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
  gap: 18px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

const GlassCard = styled.section`
  padding: 24px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.035)),
    rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.05),
    0 18px 34px rgba(0, 0, 0, 0.18);
`

const CalendarWidget = styled(GlassCard)`
  min-height: 100%;
`

const CalendarHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;

  h2 {
    color: #f8fafc;
    font-size: 28px;
    margin-top: 14px;
    margin-bottom: 8px;
    letter-spacing: -0.03em;
  }

  p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.7;
    max-width: 540px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const CalendarNav = styled.div`
  display: flex;
  gap: 10px;
`

const NavButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  background: rgba(255,255,255,0.05);
  color: #f8fafc;
  font-size: 18px;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255,255,255,0.08);
  }
`

const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 10px;

  span {
    color: #cbd5e1;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    padding: 10px 0;
  }
`

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
`

const EmptyCell = styled.div`
  min-height: 96px;
  border-radius: 18px;
  background: rgba(255,255,255,0.02);
  border: 1px dashed rgba(255,255,255,0.04);

  @media (max-width: 640px) {
    min-height: 74px;
  }
`

const DayCell = styled.button`
  min-height: 96px;
  padding: 12px 10px;
  border-radius: 18px;
  text-align: left;
  border: 1px solid
    ${({ $isSelected, $isToday }) =>
      $isSelected
        ? "rgba(244,114,182,0.55)"
        : $isToday
        ? "rgba(251,191,36,0.45)"
        : "rgba(255,255,255,0.06)"};
  background:
    ${({ $isSelected, $isToday, $tone }) => {
      if ($isSelected) {
        return "linear-gradient(180deg, rgba(168,85,247,0.24), rgba(244,114,182,0.14))"
      }

      if ($isToday) {
        return "linear-gradient(180deg, rgba(251,191,36,0.18), rgba(251,146,60,0.10))"
      }

      if ($tone === "planning") {
        return "linear-gradient(180deg, rgba(168,85,247,0.14), rgba(255,255,255,0.04))"
      }

      if ($tone === "review") {
        return "linear-gradient(180deg, rgba(251,191,36,0.14), rgba(255,255,255,0.04))"
      }

      if ($tone === "release") {
        return "linear-gradient(180deg, rgba(244,114,182,0.14), rgba(255,255,255,0.04))"
      }

      if ($tone === "deadline") {
        return "linear-gradient(180deg, rgba(251,113,133,0.14), rgba(255,255,255,0.04))"
      }

      return "rgba(255,255,255,0.04)"
    }};
  color: #f8fafc;
  transition: 0.2s ease;
  box-shadow: ${({ $isSelected }) =>
    $isSelected ? "0 16px 28px rgba(168,85,247,0.16)" : "none"};

  &:hover {
    transform: translateY(-2px);
    background:
      ${({ $isSelected }) =>
        $isSelected
          ? "linear-gradient(180deg, rgba(168,85,247,0.24), rgba(244,114,182,0.14))"
          : "rgba(255,255,255,0.07)"};
  }

  @media (max-width: 640px) {
    min-height: 74px;
    padding: 10px 8px;
  }
`

const DayNumber = styled.span`
  display: block;
  color: #f8fafc;
  font-size: 16px;
  font-weight: 700;
`

const DayMarkers = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 12px;
  flex-wrap: wrap;
`

const Marker = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({ $tone }) => {
    if ($tone === "planning") return "#a855f7"
    if ($tone === "review") return "#fbbf24"
    if ($tone === "release") return "#fb7185"
    return "#f97316"
  }};
  box-shadow: 0 0 0 4px rgba(255,255,255,0.03);
`

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const NotesCard = styled(GlassCard)`
  h3 {
    color: #f8fafc;
    font-size: 22px;
    margin-bottom: 10px;
    letter-spacing: -0.03em;
  }

  p {
    color: #94a3b8;
    font-size: 14px;
    line-height: 1.75;
  }
`

const PreviewFrame = styled.div`
  margin-top: 16px;
  width: 100%;
  min-height: 220px;
  border-radius: 22px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(168,85,247,0.12), rgba(251,191,36,0.08)),
    rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }

  span {
    color: #94a3b8;
    font-size: 14px;
    text-align: center;
    line-height: 1.6;
    padding: 24px;
  }
`

const EventsCard = styled(GlassCard)``

const SelectedDateTitle = styled.h3`
  color: #f8fafc;
  font-size: 22px;
  margin-top: 14px;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
`

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const EventItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.07);

  strong {
    display: block;
    color: #f8fafc;
    margin-bottom: 6px;
    font-size: 14px;
  }

  span {
    color: #94a3b8;
    font-size: 13px;
  }
`

const EventDot = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 4px;
  border-radius: 999px;
  flex-shrink: 0;
  background: ${({ $tone }) => {
    if ($tone === "planning") return "#a855f7"
    if ($tone === "review") return "#fbbf24"
    if ($tone === "release") return "#fb7185"
    return "#f97316"
  }};
`

const EmptyEvents = styled.p`
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.75;
`