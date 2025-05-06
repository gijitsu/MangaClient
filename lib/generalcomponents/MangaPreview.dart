import 'package:flutter/material.dart';
import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';
import 'package:http/http.dart' as http;

import '../MangaSummary.dart';
import '../ReviewSpecPage.dart';

class MangaPreview extends StatefulWidget {
  MangaPreview({
    super.key,
    required this.title,
    required this.totalNumberOfCharacters,
    required this.numberOfCharactersPerLine,
    required this.boxHeight,
    required this.boxWidth,
    required this.coverHeight,
    required this.coverWidth,
    required this.id,
    required this.coverfilename,
    required this.tags,
    required this.description,
    required this.userData,
    required this.types,
  });

  String title;
  int totalNumberOfCharacters;
  int numberOfCharactersPerLine;
  double boxHeight;
  double boxWidth;
  double coverHeight;
  double coverWidth;
  String id;
  String coverfilename;
  String tags;
  String description;
  String types;
  dynamic userData;

  @override
  State<MangaPreview> createState() => _MangaPreviewState();
}

class _MangaPreviewState extends State<MangaPreview> {
  Uint8List? _imageBytes;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _loadImage();
  }

  Future<void> _loadImage() async {
    final imageUrl =
        'https://proxy.bertmpngn.workers.dev/covers/${widget.id}/${widget.coverfilename}';

    try {
      final response = await http.get(Uri.parse(imageUrl));
      if (response.statusCode == 200) {
        setState(() {
          _imageBytes = response.bodyBytes;
          _loading = false;
        });
      } else {
        print("Image load failed: ${response.statusCode}");
        setState(() => _loading = false);
      }
    } catch (e) {
      print("Error loading image: $e");
      setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    int sz = widget.title.length;
    String lessenedTitle =
        widget.title.substring(0, min(widget.totalNumberOfCharacters, sz));
    var actualTitle = '';
    for (int i = 0;
        i < lessenedTitle.length;
        i += widget.numberOfCharactersPerLine) {
      actualTitle += lessenedTitle.substring(
              i, min(i + widget.numberOfCharactersPerLine, lessenedTitle.length)) +
          "\n";
    }

    return InkWell(
      onTap: () {
        final coverUrl =
            'https://proxy.bertmpngn.workers.dev/covers/${widget.id}/${widget.coverfilename}';

        final page = widget.types == 'Review'
            ? PageReview(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              )
            : MangaSummary(
                id: widget.id,
                title: widget.title,
                tags: widget.tags,
                description: widget.description,
                coverArt: coverUrl,
                userData: widget.userData,
              );

        Navigator.push(context, MaterialPageRoute(builder: (context) => page));
      },
      child: SizedBox(
        height: widget.boxHeight,
        width: widget.boxWidth,
        child: Column(
          children: [
            Container(
              height: widget.coverHeight,
              width: widget.coverWidth,
              margin: const EdgeInsets.fromLTRB(2.0, 0.0, 0.0, 0.0),
              decoration: BoxDecoration(
                border: Border.all(width: 2),
                borderRadius: BorderRadius.circular(16.0),
              ),
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : _imageBytes != null
                      ? ClipRRect(
                          borderRadius: BorderRadius.circular(14.0),
                          child: Image.memory(
                            _imageBytes!,
                            fit: BoxFit.cover,
                          ),
                        )
                      : const Center(child: Icon(Icons.broken_image)),
            ),
            Flexible(
              child: Container(
                margin: const EdgeInsets.only(right: 5),
                height: 100,
                child: SingleChildScrollView(
                  child: Text(
                    actualTitle,
                    textAlign: TextAlign.justify,
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 13,
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
