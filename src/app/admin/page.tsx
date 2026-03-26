"use client";

import { useState } from "react";
import {
  createProfile,
  createSource,
  createTimelineEvent,
  createRelationship,
} from "@/lib/db";
import type {
  ProfileInsert,
  SourceInsert,
  TimelineEventInsert,
  RelationshipInsert,
} from "@/lib/database.types";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"profile" | "source" | "event" | "relationship">("profile");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form states
  const [profileForm, setProfileForm] = useState<ProfileInsert>({
    slug: "",
    name: "",
    short_bio: "",
    role: "",
    region: "",
    summary: "",
  });

  const [sourceForm, setSourceForm] = useState<SourceInsert>({
    profile_id: "",
    title: "",
    publisher: "",
    source_type: "article",
    source_date: "",
    href: "",
  });

  const [eventForm, setEventForm] = useState<TimelineEventInsert>({
    profile_id: "",
    event_date: "",
    title: "",
    summary: "",
    status: "allegation",
    category: "legal",
  });

  const [relationshipForm, setRelationshipForm] = useState<RelationshipInsert>({
    profile_id: "",
    label: "",
    target_name: "",
    target_type: "person",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      let result;
      switch (activeTab) {
        case "profile":
          result = await createProfile(profileForm);
          if (result) {
            setSuccess("Profile created successfully!");
            setProfileForm({
              slug: "",
              name: "",
              short_bio: "",
              role: "",
              region: "",
              summary: "",
            });
          }
          break;
        case "source":
          result = await createSource(sourceForm);
          if (result) {
            setSuccess("Source created successfully!");
            setSourceForm({
              profile_id: "",
              title: "",
              publisher: "",
              source_type: "article",
              source_date: "",
              href: "",
            });
          }
          break;
        case "event":
          result = await createTimelineEvent(eventForm);
          if (result) {
            setSuccess("Timeline event created successfully!");
            setEventForm({
              profile_id: "",
              event_date: "",
              title: "",
              summary: "",
              status: "allegation",
              category: "legal",
            });
          }
          break;
        case "relationship":
          result = await createRelationship(relationshipForm);
          if (result) {
            setSuccess("Relationship created successfully!");
            setRelationshipForm({
              profile_id: "",
              label: "",
              target_name: "",
              target_type: "person",
              description: "",
            });
          }
          break;
      }

      if (!result) {
        setError("Failed to create. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-4">
            <div>
              <label>Slug</label>
              <input
                type="text"
                value={profileForm.slug}
                onChange={(e) => setProfileForm({...profileForm, slug: e.target.value})}
                required
              />
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={profileForm.name}
                onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label>Short Bio</label>
              <textarea
                value={profileForm.short_bio}
                onChange={(e) => setProfileForm({...profileForm, short_bio: e.target.value})}
              />
            </div>
            {/* Add remaining profile fields */}
          </div>
        );
      case "source":
        return (
          <div className="space-y-4">
            <div>
              <label>Profile ID</label>
              <input
                type="text"
                value={sourceForm.profile_id}
                onChange={(e) => setSourceForm({...sourceForm, profile_id: e.target.value})}
                required
              />
            </div>
            <div>
              <label>Title</label>
              <input
                type="text"
                value={sourceForm.title}
                onChange={(e) => setSourceForm({...sourceForm, title: e.target.value})}
                required
              />
            </div>
            {/* Add remaining source fields */}
          </div>
        );
      case "event":
        return (
          <div className="space-y-4">
            <div>
              <label>Profile ID</label>
              <input
                type="text"
                value={eventForm.profile_id}
                onChange={(e) => setEventForm({...eventForm, profile_id: e.target.value})}
                required
              />
            </div>
            <div>
              <label>Event Date</label>
              <input
                type="date"
                value={eventForm.event_date}
                onChange={(e) => setEventForm({...eventForm, event_date: e.target.value})}
                required
              />
            </div>
            {/* Add remaining event fields */}
          </div>
        );
      case "relationship":
        return (
          <div className="space-y-4">
            <div>
              <label>Profile ID</label>
              <input
                type="text"
                value={relationshipForm.profile_id}
                onChange={(e) => setRelationshipForm({...relationshipForm, profile_id: e.target.value})}
                required
              />
            </div>
            <div>
              <label>Target Name</label>
              <input
                type="text"
                value={relationshipForm.target_name}
                onChange={(e) => setRelationshipForm({...relationshipForm, target_name: e.target.value})}
                required
              />
            </div>
            {/* Add remaining relationship fields */}
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="tabs mb-6">
        <button 
          className={`tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button 
          className={`tab ${activeTab === "source" ? "active" : ""}`}
          onClick={() => setActiveTab("source")}
        >
          Source
        </button>
        <button 
          className={`tab ${activeTab === "event" ? "active" : ""}`}
          onClick={() => setActiveTab("event")}
        >
          Timeline Event
        </button>
        <button 
          className={`tab ${activeTab === "relationship" ? "active" : ""}`}
          onClick={() => setActiveTab("relationship")}
        >
          Relationship
        </button>
      </div>

      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderForm()}
        <button 
          type="submit" 
          className="btn primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}
