import CircularGallery from "../components/ui/CircularGallery";
import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data, error } = await supabase
          .from("gallery")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching gallery:", error);
        } else {
          const formattedItems = data.map((item) => ({
            image: item.image_url,
            text: "", // Placeholder as text is not in DB yet
          }));
          setItems(formattedItems);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <div style={{ height: "600px", position: "relative" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            Loading...
          </div>
        ) : items.length > 0 ? (
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            No images found in gallery.
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
