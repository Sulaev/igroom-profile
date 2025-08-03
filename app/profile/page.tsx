import { getProfile } from "@/entities/profile/api";
import { ProfileCard } from "@/entities/profile/ProfileCard";
import { Header } from "@/entities/layout/Header";
import { Footer } from "@/entities/layout/Footer";

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Header />
        <ProfileCard profile={profile} />
        <Footer />
      </div>
  );
}
